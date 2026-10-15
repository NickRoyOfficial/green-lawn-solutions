import { test, expect } from "@playwright/test"

test("hero fits and local assets load without page errors", async ({ page }) => {
  const errors: string[] = []
  page.on("pageerror", error => errors.push(error.message))
  await page.goto("/")
  await page.evaluate(() => document.fonts.ready)
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
  const dimensions = await page.evaluate(() => ({
    viewport: innerHeight,
    hero: document.querySelector(".hero")!.getBoundingClientRect().height,
    overflow: document.documentElement.scrollWidth > innerWidth,
    bottom: document.querySelector(".hero-bottom")!.getBoundingClientRect().bottom,
  }))
  expect(dimensions.overflow).toBe(false)
  expect(dimensions.hero).toBeLessThanOrEqual(dimensions.viewport + 1)
  expect(dimensions.bottom).toBeLessThanOrEqual(dimensions.viewport + 1)
  const images = await page.locator(".hero img").evaluateAll(elements => elements.every(element => (element as HTMLImageElement).complete && (element as HTMLImageElement).naturalWidth > 0))
  expect(images).toBe(true)
  expect(errors).toEqual([])
})

test("inquiry requires an email and opens a draft without sending", async ({ page }) => {
  let outbound = 0
  page.on("request", request => { if (request.method() === "POST") outbound++ })
  await page.goto("/")
  await page.getByRole("button", { name: "Prepare my inquiry" }).click()
  await expect(page.getByRole("dialog")).toHaveCount(0)
  await page.getByLabel("Your email", { exact: true }).fill("preview@example.com")
  await page.getByLabel("I’m interested in").selectOption({ label: "Tick & mosquito control" })
  await page.getByRole("button", { name: "Prepare my inquiry" }).click()
  const dialog = page.getByRole("dialog", { name: "Review your inquiry" })
  await expect(dialog).toBeVisible()
  await expect(dialog).toContainText("Nothing has been sent")
  await expect(dialog).toContainText("Tick & mosquito control")
  await expect(dialog.getByRole("link", { name: "Open email draft" })).toHaveAttribute("href", /^mailto:greenlawnsolution@yahoo\.com\?/)
  expect(outbound).toBe(0)
  await page.keyboard.press("Escape")
  await expect(dialog).toHaveCount(0)
})

test("gallery, carousel, FAQ and mobile navigation work", async ({ page }) => {
  await page.goto("/")
  if (await page.getByRole("button", { name: "Open navigation" }).isVisible()) {
    const trigger = page.getByRole("button", { name: "Open navigation" })
    await trigger.click()
    await expect(page.getByRole("dialog", { name: "Green Lawn Solutions" })).toBeVisible()
    await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Our outdoors" }).click()
    await expect(page.getByRole("dialog")).toHaveCount(0)
  }
  await page.getByRole("button", { name: "View paths & planting photo" }).click()
  await expect(page.getByRole("dialog", { name: "Paths & planting" })).toBeVisible()
  await page.getByRole("button", { name: "Next photo" }).click()
  await expect(page.getByRole("dialog", { name: "Landscape details" })).toBeVisible()
  await page.keyboard.press("ArrowLeft")
  await expect(page.getByRole("dialog", { name: "Paths & planting" })).toBeVisible()
  await page.keyboard.press("Escape")
  await expect(page.getByRole("button", { name: "View paths & planting photo" })).toBeFocused()
  const carousel = page.getByRole("region", { name: "Customer feedback" })
  const track = carousel.locator('[data-slot="carousel-content"] > div')
  const initial = await track.evaluate(el => getComputedStyle(el).transform)
  await carousel.getByRole("button", { name: "Next slide" }).click()
  await expect.poll(() => track.evaluate(el => getComputedStyle(el).transform)).not.toBe(initial)
  await page.getByRole("button", { name: "Do you serve my area?" }).click()
  await expect(page.getByRole("region").filter({ hasText: "confirm service for your address" })).toBeVisible()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})

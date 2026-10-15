import { lazy, Suspense, useEffect, useRef, useState } from "react"
import { ArrowDown, ArrowRight, ArrowUpRight, Bug, Check, ChevronLeft, ChevronRight, Leaf, MapPin, Menu, MoveUpRight, Phone, Plus, Scissors, ShieldCheck, Sprout, Trees } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useInquiryForm } from "@/hooks/use-inquiry-form"

const UIShowcase = import.meta.env.DEV ? lazy(() => import("./dev/ui-showcase")) : null
const originalSite = "https://www.greenlawnsolutionsinc.net"
const booking = `${originalSite}/book-online`
const asset = (name: string) => `/assets/${name}`
const services = [
  { name: "Fertilizer & weed control", short: "A little care. A lot more green.", image: "front-lawn.webp", alt: "Green lawn in front of a landscaped home", icon: Sprout, slug: "fertilizer-weed-control", style: "service-large" },
  { name: "Tick & mosquito control", short: "Take back your time outside.", image: "lakeside-lawn.webp", alt: "A person applying an outdoor treatment beside a wooded lake", icon: ShieldCheck, slug: "pest-control", style: "service-large" },
  { name: "Mowing services", short: "Keep your lawn looking its best.", image: "pond-landscape.webp", alt: "Lawn bordering a planted garden and stone pond", icon: Scissors, slug: "mowing-services", style: "" },
  { name: "Spring & fall cleanup", short: "A fresh start for the season.", image: "mulched-bed.webp", alt: "Mulch and stepping stones beside a home", icon: Leaf, slug: "spring-fall-cleanup", style: "" },
  { name: "Landscape design & construction", short: "Bring your outdoor space together.", image: "garden-path.webp", alt: "Curved paver walkway through planted garden beds", icon: Trees, slug: "landscape-design-landscape-construction", style: "" },
]
const gallery = [
  { file: "garden-path.webp", label: "Paths & planting", alt: "A curved paver path surrounded by garden plantings", width: 1080, height: 810 },
  { file: "pond-landscape.webp", label: "Landscape details", alt: "Stone pond and planting beds alongside a lawn", width: 936, height: 524 },
  { file: "mulched-bed.webp", label: "Seasonal care", alt: "A mulched planting bed with stepping stones", width: 1080, height: 810 },
  { file: "lakeside-lawn.webp", label: "Life by the lake", alt: "A person applying an outdoor treatment to a lakeside property", width: 624, height: 854 },
]
const notes = [
  { name: "Jeff & Tracey M.", subject: "A backyard transformed", text: "Jeff and Tracey describe a transformation of their backyard.", tag: "LANDSCAPING" },
  { name: "Gary & Catherine B.", subject: "More time outside", text: "Gary and Catherine report that their pets have been tick free.", tag: "TICK CONTROL" },
  { name: "Thomas R.", subject: "A long-awaited cleanup", text: "Thomas was impressed with a cleanup project seven years in the making.", tag: "PROPERTY CLEANUP" },
]

function Site() {
  const [service, setService] = useState(services[0].name)
  const [draftOpen, setDraftOpen] = useState(false)
  const [photo, setPhoto] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)
  const photoTrigger = useRef<HTMLButtonElement | null>(null)
  const inquiryTrigger = useRef<HTMLButtonElement | null>(null)
  const { submit, status, pending } = useInquiryForm({ mode: "mailto", recipient: "greenlawnsolution@yahoo.com", subject: "Property care inquiry" })
  useEffect(() => { if (status.phase === "draft") setDraftOpen(true) }, [status])
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target) } })
    }, { threshold: 0.08 })
    document.querySelectorAll(".reveal").forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])
  const navigation = [["Services", "#services"], ["Our story", "#story"], ["Our outdoors", "#gallery"]]
  const shiftPhoto = (direction: number) => setPhoto(current => current === null ? null : (current + direction + gallery.length) % gallery.length)

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <main id="main" tabIndex={-1}>
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header wrap">
          <a href="#" className="brand" aria-label="Green Lawn Solutions home"><img src={asset("green-lawn-solutions-logo.svg")} width="1214" height="252" alt="Green Lawn Solutions Inc. (207) 583-7502" /></a>
          <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([text, href]) => <a key={href} href={href}>{text}</a>)}</nav>
          <a href="tel:+12075837502" className="header-phone"><Phone size={16} /><span>(207) 583-7502</span></a>
          <Sheet><SheetTrigger asChild><Button variant="outline" size="icon" className="mobile-menu" aria-label="Open navigation"><Menu /></Button></SheetTrigger>
            <SheetContent className="mobile-sheet"><SheetTitle>Green Lawn Solutions</SheetTitle><SheetDescription>Lawn care, landscaping & insect control.</SheetDescription>
              <nav aria-label="Mobile navigation">{[...navigation, ["Get in touch", "#inquiry"]].map(([text, href]) => <SheetClose asChild key={href}><a href={href}>{text}<ArrowUpRight /></a></SheetClose>)}</nav>
              <Button asChild className="solid-button"><a href={booking}>Book online <ArrowUpRight /></a></Button>
            </SheetContent>
          </Sheet>
        </header>
        <div className="hero-main wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="live-dot" /> ROOTED IN HARRISON, MAINE</p>
            <h1 id="hero-title">Your outdoors.<br /><em>Well cared for.</em></h1>
            <p className="hero-description">Lawn care, landscaping, and organic tick & mosquito control. More reasons to love being outside.</p>
          </div>
          <div className="hero-visual">
            <img className="hero-photo" src={asset("front-lawn.webp")} width="732" height="548" alt="Sunlit lawn and landscaped garden outside a home" fetchPriority="high" />
            <div className="photo-topline"><span>A LITTLE CLOSER TO THE GOOD LIFE.</span><MoveUpRight size={20} /></div>
            <div className="hero-stamp"><ShieldCheck aria-hidden="true" /><div>Small business.<br /><strong>Big on the outdoors.</strong></div></div>
            <span className="image-coordinate">LAWN CARE / LANDSCAPING / INSECT CONTROL</span>
          </div>
          <form id="inquiry" className="hero-inquiry" onSubmit={submit} aria-busy={pending}>
            <div className="form-heading"><span>What does your yard need?</span><ArrowDown size={17} /></div>
            <div className="inquiry-fields">
              <div className="field"><Label htmlFor="service">I’m interested in</Label><select id="service" name="Service" value={service} onChange={event => setService(event.target.value)}>{services.map(item => <option key={item.slug}>{item.name}</option>)}</select></div>
              <div className="field"><Label htmlFor="email">Your email</Label><Input id="email" name="Email" type="email" autoComplete="email" placeholder="you@example.com" required /></div>
            </div>
            <Button ref={inquiryTrigger} type="submit" className="inquiry-submit" disabled={pending}>Prepare my inquiry <ArrowUpRight /></Button>
            <p className="form-note">Prepares an email draft for you to review.</p>
            {status.phase === "error" && <p role="alert">{status.message}</p>}
          </form>
        </div>
        <div className="hero-bottom wrap"><p><MapPin size={14} /> Lakes Region <span>/</span> Oxford Hills <span>/</span> Western Maine</p><a href="#services">A little care goes a long way <ArrowDown size={15} /></a></div>
      </section>
      <section id="services" className="services-section section-space wrap">
        <div className="section-top reveal"><p className="eyebrow"><span className="section-number">01</span> MADE FOR YOUR OUTDOORS</p><span className="small-note">From the first green shoots to the last fallen leaf.</span></div>
        <div className="section-heading reveal"><h2>Good things grow<br />with <em>the right care.</em></h2><p>One local team for a greener lawn,<br className="desktop-break" /> a more inviting landscape, and insect control.</p></div>
        <div className="services-grid">{services.map((item, index) => <a className={`service-card reveal ${item.style}`} href={`${originalSite}/booking-calendar/${item.slug}`} key={item.slug}>
          <img src={asset(item.image)} width="732" height="548" alt={item.alt} loading="lazy" />
          <div className="service-card-top"><span className="service-icon"><item.icon size={20} /></span><span className="card-index">0{index + 1}</span></div>
          <div className="service-card-copy"><p>{item.short}</p><h3>{item.name}</h3></div><span className="card-arrow"><ArrowUpRight size={21} /></span>
        </a>)}</div>
        <div className="services-foot"><span>Care for homes. Care for businesses.</span><a href={booking} className="text-link">Explore service booking <ArrowUpRight size={17} /></a></div>
      </section>
      <section className="insect-section" aria-labelledby="insect-title">
        <div className="insect-layout wrap">
          <div className="insect-art reveal"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="shield-symbol"><ShieldCheck strokeWidth={1} /></div><span className="insect-art-label"><Bug size={15} /> TICKS & MOSQUITOES.</span><span className="insect-art-note">MORE OUTDOOR LIVING.</span></div>
          <div className="insect-copy reveal"><p className="eyebrow">ORGANIC TICK & MOSQUITO CONTROL</p><h2 id="insect-title">The yard is yours.<br /><em>Enjoy more of it.</em></h2><p>From wooded edges to the lawn you love, talk to Green Lawn Solutions about insect control for your property.</p><div className="insect-tags"><span><Check size={16} /> Tick control</span><span><Check size={16} /> Mosquito control</span></div><Button asChild className="lime-button"><a href="#inquiry" onClick={() => setService(services[1].name)}>Let’s talk about your yard <ArrowUpRight /></a></Button><a className="insect-secondary" href={`${originalSite}/booking-calendar/pest-control`}>Already know what you need? Book online <ArrowRight size={15} /></a></div>
        </div>
      </section>
      <section id="gallery" className="gallery-section section-space wrap">
        <div className="section-top reveal"><p className="eyebrow"><span className="section-number">02</span> THE GREAT OUTDOORS, AT HOME</p><span className="small-note">A closer look at the details.</span></div>
        <div className="section-heading reveal"><h2>A place to <em>slow down.</em><br />A space to make your own.</h2><p>Room to relax. Space to gather.<br />A little green in your everyday.</p></div>
        <div className="gallery-grid">{gallery.map((item, index) => <button key={item.file} className={`gallery-tile reveal gallery-tile-${index}`} onClick={event => { photoTrigger.current = event.currentTarget; setPhoto(index) }} aria-label={`View ${item.label.toLowerCase()} photo`}>
          <img src={asset(item.file)} alt={item.alt} width={item.width} height={item.height} loading="lazy" /><span className="gallery-caption">{item.label}<span><Plus size={19} /></span></span>
        </button>)}</div>
      </section>
      <section id="story" className="story-section wrap">
        <div className="story-photo reveal"><img src={asset("owners.webp")} alt="The owners pictured on the Green Lawn Solutions website" width="584" height="602" loading="lazy" /><div className="story-photo-tag"><span>LOCAL ROOTS.</span><strong>Since 2017.</strong></div></div>
        <div className="story-copy reveal"><p className="eyebrow"><span className="section-number">03</span> YOUR LOCAL TEAM</p><h2>Good people.<br /><em>Grounded in Maine.</em></h2><p>Steven and Debra Thomas started Green Lawn Solutions in Harrison in 2017. Today, their family-owned business cares for residential and commercial properties across the Lakes Region, Oxford Hills, and Western Maine.</p><p>Bring us the lawn that needs attention, the landscape you’ve been thinking about, or the outdoor insect problem you’re ready to address.</p><a href="tel:+12075837502" className="text-link">Talk to our team <ArrowUpRight size={18} /></a><div className="story-region"><MapPin size={20} /><div><strong>Harrison, Maine</strong><span>Lakes Region · Oxford Hills · Western Maine</span></div></div></div>
      </section>
      <section className="testimonials-section section-space wrap">
        <div className="section-top reveal"><p className="eyebrow"><span className="section-number">04</span> WORD AROUND THE NEIGHBORHOOD</p></div>
        <div className="testimonials-layout reveal"><div><h2>From their yards<br /><em>to your ears.</em></h2><p className="testimonial-note">Customer feedback, summarized.</p></div>
          <Carousel opts={{ loop: true }} className="testimonial-carousel" aria-label="Customer feedback" tabIndex={0}>
            <CarouselContent>{notes.map((note, index) => <CarouselItem key={note.name} aria-label={`${index + 1} of ${notes.length}`}><article className="testimonial-card"><span className="eyebrow">{note.tag}</span><h3>{note.subject}</h3><p>{note.text}</p><footer><span className="customer-initial">{note.name[0]}</span><strong>{note.name}</strong><span className="review-number">0{index + 1} / 03</span></footer></article></CarouselItem>)}</CarouselContent>
            <div className="testimonial-controls"><CarouselPrevious /><CarouselNext /></div>
          </Carousel>
        </div>
      </section>
      <section className="faq-section wrap reveal"><div><p className="eyebrow">A FEW THINGS TO KNOW</p><h2>A little <em>clarity.</em></h2></div><Accordion type="single" collapsible className="faq-list">
        <AccordionItem value="area"><AccordionTrigger>Do you serve my area?</AccordionTrigger><AccordionContent>Green Lawn Solutions serves the Lakes Region, Oxford Hills, and Western Maine from Harrison. <a href="tel:+12075837502">Call (207) 583-7502</a> to confirm service for your address.</AccordionContent></AccordionItem>
        <AccordionItem value="booking"><AccordionTrigger>How do I book a service?</AccordionTrigger><AccordionContent>You can <a href={booking}>visit the existing online booking page</a> or call to discuss what your property needs. The inquiry form above prepares an email draft for you to review and send.</AccordionContent></AccordionItem>
        <AccordionItem value="properties"><AccordionTrigger>Do you care for commercial properties?</AccordionTrigger><AccordionContent>Yes. Green Lawn Solutions offers lawn care and landscaping for residential and commercial properties.</AccordionContent></AccordionItem>
      </Accordion></section>
      <section className="closing-section wrap reveal"><div><p className="eyebrow">GOOD DAYS START OUTSIDE.</p><h2>Let’s make more <em>of yours.</em></h2></div><Button asChild className="solid-button"><a href="#inquiry">Tell us about your yard <ArrowUpRight /></a></Button></section>
      <footer className="site-footer"><div className="footer-main wrap"><a className="footer-brand" href="#"><img src={asset("green-lawn-solutions-logo.svg")} alt="Green Lawn Solutions Inc." width="1214" height="252" /></a><div className="footer-contact"><a href="tel:+12075837502">(207) 583-7502</a><a href="mailto:greenlawnsolution@yahoo.com">greenlawnsolution@yahoo.com</a><span>P.O. Box 33, Harrison, ME 04040</span></div><nav aria-label="Additional links"><a href={booking}>Book a service <ArrowUpRight size={14} /></a><a href={originalSite}>Customer payments on current site <ArrowUpRight size={14} /></a><a href={`${originalSite}/_files/ugd/d03380_b4166ac9b4654e49a98d29c48653246e.pdf`}>Join the team <ArrowUpRight size={14} /></a></nav></div><div className="footer-bottom wrap"><span>© {new Date().getFullYear()} Green Lawn Solutions Inc.</span><span>Independent website concept. Not the official company website.</span><a href="#">Back to top <ArrowUpRight size={14} /></a></div></footer>
    </main>
    <Dialog open={draftOpen} onOpenChange={setDraftOpen}><DialogContent className="inquiry-dialog" onCloseAutoFocus={event => { event.preventDefault(); inquiryTrigger.current?.focus({ preventScroll: true }); setCopied(false) }}><DialogTitle>Review your inquiry</DialogTitle><DialogDescription>Nothing has been sent. Open this draft in your email app to review and send it to Green Lawn Solutions.</DialogDescription><pre className="draft-text">{status.text}</pre><div className="dialog-actions"><Button asChild className="solid-button"><a href={status.href}>Open email draft <ArrowUpRight /></a></Button><Button variant="outline" onClick={async () => { try { await navigator.clipboard.writeText(status.text || ""); setCopied(true) } catch { setCopied(false) } }}>{copied ? "Copied" : "Copy inquiry"}</Button></div><p className="copy-status" role="status">{copied ? "Inquiry copied to clipboard." : "You can also select and copy the text above."}</p></DialogContent></Dialog>
    <Dialog open={photo !== null} onOpenChange={open => { if (!open) setPhoto(null) }}><DialogContent className="photo-dialog" onCloseAutoFocus={event => { event.preventDefault(); photoTrigger.current?.focus({ preventScroll: true }) }} onKeyDown={event => { if (event.key === "ArrowLeft") { event.preventDefault(); shiftPhoto(-1) } if (event.key === "ArrowRight") { event.preventDefault(); shiftPhoto(1) } }}><DialogTitle>{photo === null ? "Photo gallery" : gallery[photo].label}</DialogTitle><DialogDescription>A closer look outdoors. Use the arrows to browse.</DialogDescription>{photo !== null && <img className="lightbox-photo" src={asset(gallery[photo].file)} alt={gallery[photo].alt} width={gallery[photo].width} height={gallery[photo].height} />}<div className="lightbox-controls"><Button variant="outline" size="icon" aria-label="Previous photo" onClick={() => shiftPhoto(-1)}><ChevronLeft /></Button><span>{(photo ?? 0) + 1} / {gallery.length}</span><Button variant="outline" size="icon" aria-label="Next photo" onClick={() => shiftPhoto(1)}><ChevronRight /></Button></div></DialogContent></Dialog>
  </>
}
export default function App() {
  if (UIShowcase && new URLSearchParams(location.search).has("ui")) return <Suspense fallback={<p>Loading controls…</p>}><UIShowcase /></Suspense>
  return <Site />
}

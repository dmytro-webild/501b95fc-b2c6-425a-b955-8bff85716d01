"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TextAbout from '@/components/sections/about/TextAbout';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleFullscreen
            navItems={[
              { name: "Home", id: "hero" },
              { name: "Waitlist", id: "waitlist" },
            ]}
            brandName="AYU"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroLogoBillboardSplit
            background={{ variant: "plain" }}
            logoText="AYU"
            description="Pure from the start. The first baby bottle with zero plastic. Coming soon."
            buttons={[
              { text: "Join the waitlist", href: "#waitlist" },
            ]}
            buttonAnimation="opacity"
            layoutOrder="default"
            mediaAnimation="opacity"
            imageSrc="http://img.b2bpic.net/free-photo/top-view-sustainably-produced-alcoholic-beverage_23-2150162974.jpg"
            imageAlt="AYU glass baby bottle"
          />
        </div>

        <div id="problem" data-section="problem">
          <FeatureCardMedia
            animationType="opacity"
            textboxLayout="default"
            useInvertedBackground={false}
            features={[
              { id: "f1", title: "Microplastics", description: "4.6 million microplastic particles are released from a single plastic bottle when heated.", imageSrc: "http://img.b2bpic.net/free-photo/wavy-waters-pool-with-darker-blue-spots-flat-lay_23-2148358141.jpg", tag: "Issue 1" },
              { id: "f2", title: "False Safety", description: "BPA-free is not plastic-free. BPS and BPF alternatives carry identical chemical risks.", imageSrc: "http://img.b2bpic.net/free-vector/motivational-quote-with-flat-design_23-2147844010.jpg", tag: "Issue 2" },
              { id: "f3", title: "Heat Impact", description: "Dishwashers and sterilizers accelerate plastic breakdown, releasing toxins into every feed.", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-yellow-flower-extreme-close-up_23-2148256533.jpg", tag: "Issue 3" },
            ]}
            title="What's really in your baby's bottle?"
            description="Understanding the hidden risks of everyday plastic components."
          />
        </div>

        <div id="solution" data-section="solution">
          <FeatureCardMedia
            animationType="opacity"
            textboxLayout="default"
            useInvertedBackground={true}
            features={[
              { id: "s1", title: "Borosilicate Glass", description: "Pharmaceutical grade construction, thermal shock resistant.", imageSrc: "http://img.b2bpic.net/free-photo/photo-metal-texture-pattern_58702-11987.jpg", tag: "Feature 1" },
              { id: "s2", title: "Stainless Steel Collar", description: "Zero plastic, anywhere in the construction.", imageSrc: "http://img.b2bpic.net/free-vector/metallic-textured-background_53876-89257.jpg", tag: "Feature 2" },
              { id: "s3", title: "Medical Silicone", description: "Soft, safe nipple design available in three distinct flow rates.", imageSrc: "http://img.b2bpic.net/free-photo/ater-drop-blue-cloth_23-2147828375.jpg", tag: "Feature 3" },
              { id: "s4", title: "Protective Sleeve", description: "Partial wrap silicone sleeve designed for grip and durability.", imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-using-nebulizer-home_23-2150562030.jpg", tag: "Feature 4" },
            ]}
            title="Nothing but glass."
            description="We built the baby bottle that should have always existed."
          />
        </div>

        <div id="about" data-section="about">
          <TextAbout
            useInvertedBackground={false}
            tag="Our Story"
            title="Why we built Ayu"
            description="When we looked at what babies drink from every day, we couldn't believe the standard. Plastic bottles that leach chemicals when heated. BPA-free labels that hide equally harmful alternatives. Even glass bottles from major brands still use plastic collars and components. We built Ayu because every single part that touches your baby's milk should be free of plastic. No compromise. No exceptions. Just glass, silicone, and stainless steel — nothing else."
          />
        </div>

        <div id="details" data-section="details">
          <FaqSplitText
            useInvertedBackground={true}
            faqs={[
              { id: "d1", title: "150ml Variant", content: "Wide neck, Borosilicate glass, Stainless steel collar, Medical-grade silicone nipple, Partial silicone sleeve, Dishwasher safe, Zero plastic components" },
              { id: "d2", title: "250ml Variant", content: "Wide neck, Borosilicate glass, Stainless steel collar, Medical-grade silicone nipple, Partial silicone sleeve, Dishwasher safe, Zero plastic components" },
            ]}
            sideTitle="The Details"
            faqsAnimation="opacity"
            sideDescription="Precision engineered components designed for safety and longevity."
          />
        </div>

        <div id="waitlist" data-section="waitlist">
          <ContactCenter
            useInvertedBackground={false}
            background={{ variant: "plain" }}
            tag="Join the waitlist"
            title="Be part of the new standard."
            description="Join the waitlist for early access and exclusive launch pricing. Limited first batch."
            tagIcon={Sparkles}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterCard
            logoText="AYU"
            copyrightText="© 2026 Ayu Baby"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
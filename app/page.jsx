import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-6">
      <HeroSection />
      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-md transition-all hover:border-primary/20 dark:hover:border-secondary/30 group"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary dark:text-secondary mb-2 group-hover:text-primary/80 dark:group-hover:text-secondary/80 transition-colors">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              AI-Powered Financial Management Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to track, analyze, and improve your financial
              health in one centralized platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresData.map((feature, index) => (
              <Card
                key={index}
                className="feature-card border-border/40 hover:shadow-lg transition-all group hover:border-primary/20 dark:hover:border-secondary/30"
              >
                <CardContent className="space-y-4 pt-6 pb-6">
                  <div className="text-primary dark:text-secondary p-3 bg-primary/10 dark:bg-secondary/10 inline-flex rounded-lg group-hover:bg-primary/15 dark:group-hover:bg-secondary/15 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-medium">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick, secure, and flexible - begin your financial journey in
              three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary/10 dark:bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary dark:text-secondary group-hover:bg-primary/15 dark:group-hover:bg-secondary/15 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-medium mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              What Users Are Saying
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These Feedbacks are not real, they are demo data to showcase the
              design and layout of the testimonials section.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.map((testimonial, index) => (
              <Card
                key={index}
                className="testimonial-card border-border/40 hover:shadow-lg transition-all"
              >
                <CardContent className="pt-6 pb-6">
                  <svg
                    className="text-primary h-6 w-6 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="rounded-2xl overflow-hidden relative bg-gradient-to-br from-primary to-secondary dark:from-primary dark:to-secondary/90">
            <div className="absolute inset-0 bg-grid opacity-10"></div>

            <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:max-w-2xl">
                <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">
                  Ready To Take Control Of Your Finances?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-xl">
                  Join us and start managing your finances with ease with
                  finefinance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/dashboard">
                    <Button className="bg-white text-primary hover:bg-white/90 px-8 h-12 rounded-md shadow-sm w-full sm:w-auto">
                      Try Demo
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="md:w-1/3 flex-shrink-0">
                <div className="relative">
                  <div className="w-[300px] h-[300px] rounded-full blur-3xl absolute -z-10 bg-white/20 -top-20 -left-20"></div>
                  <Image
                    src="/banner.png"
                    alt="Financial Dashboard Preview"
                    width={400}
                    height={300}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

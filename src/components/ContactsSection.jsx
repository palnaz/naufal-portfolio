import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <div className="flex justify-center">
          <div className="bg-card rounded-lg shadow-lg p-8 lg:p-12 max-w-md w-full">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-left">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:naufalahmadfaz@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      naufalahmadfaz@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-left">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a
                      href="tel:+6282177315565"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +62 821-7731-5565
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-left">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      East Jakarta, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/naufal-ahmad-fauzan-8528462b7/"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

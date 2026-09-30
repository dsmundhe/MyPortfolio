import { ArrowUpRight, Award, CheckCircle2, Clock3 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { certificates, timeline } from "../data/portfolio";

export default function Experience() {
  return (
    <>
      <section id="experience" className="section experience">
        <div className="shell">
          <SectionHeading
            eyebrow="Experience"
            title={
              <>
                Learning quickly.
                <br />
                <em>Shipping thoughtfully.</em>
              </>
            }
          >
            I&apos;m building a professional foundation across analytics and
            full-stack product engineering — two perspectives that help me see
            both the data and the user.
          </SectionHeading>
          <div className="experience-timeline">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal
                  className="experience-item"
                  key={item.title}
                  delay={index * 0.1}
                >
                  <div className="experience-period">{item.period}</div>
                  <div className="experience-marker">
                    <span>
                      <Icon size={19} />
                    </span>
                  </div>
                  <div className="experience-content">
                    <p>{item.company}</p>
                    <h3>
                      {item.title}
                      <ArrowUpRight size={19} />
                    </h3>
                    <span>{item.text}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section services">
        <div className="shell services-grid">
          <div>
            <SectionHeading
              eyebrow="How I can help"
              title={
                <>
                  A practical partner
                  <br />
                  for <em>product work.</em>
                </>
              }
            >
              I bring a considered mix of interface craft and application
              thinking to every collaboration.
            </SectionHeading>
            <div className="service-note">
              <Clock3 />
              <div>
                <span>Typical response time</span>
                <b>Within 24–48 hours</b>
              </div>
            </div>
          </div>
          <div className="service-list">
            {[
              "Web development",
              "Full-stack delivery",
              "REST API design",
              "Frontend engineering",
              "Dashboard development",
              "Performance optimisation",
            ].map((service, index) => (
              <Reveal
                key={service}
                delay={index * 0.05}
                className="service-row"
              >
                <span>0{index + 1}</span>
                <h3>{service}</h3>
                <ArrowUpRight size={18} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section extras">
        <div className="shell extra-grid">
          <Reveal className="certificate-panel">
            <span className="eyebrow">
              <span />
              Credentials & growth
            </span>
            <h3>Built through practice, not just theory.</h3>
            {certificates.map((certificate) => (
              <div key={certificate}>
                <Award size={17} />
                <p>{certificate}</p>
                <ArrowUpRight size={15} />
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.1} className="blog-panel">
            <div className="blog-star">
              <CheckCircle2 />
            </div>
            <span className="eyebrow">
              <span />
              Notes from the build
            </span>
            <h3>Writing in progress.</h3>
            <p>
              Practical notes on building products, learning systems, and making
              frontend work feel more intentional.
            </p>
            <span className="coming-soon">Coming soon</span>
          </Reveal>
        </div>
      </section>
    </>
  );
}

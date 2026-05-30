"use client";

import { useActionState } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/_actions/submitEnquiry";
import { Icon } from "@/app/_components/Icon";
import { SITE } from "@/app/_data/site";
import styles from "@/app/_components/ContactForm.module.css";

const initial: EnquiryState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitEnquiry, initial);

  if (state.status === "success") {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>
          <Icon name="check" size={28} />
        </div>
        <h3 className={styles.successTitle}>Message sent!</h3>
        <p className={styles.successText}>
          Thanks for getting in touch. We&rsquo;ll be back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        {/* Contact info */}
        <div className={styles.info}>
          <h2 className={styles.infoHeading}>Get in touch</h2>
          <p className={styles.infoLead}>
            Ready to get started? Fill in the form and we&rsquo;ll get back to you within 24 hours — or call us for a friendly chat.
          </p>

          <dl className={styles.details}>
            <div className={styles.detail}>
              <dt className="sr-only">Address</dt>
              <dd>
                <Icon name="map-pin" size={18} />
                <span>
                  {SITE.address.street},<br />
                  {SITE.address.city}, {SITE.address.postcode}
                </span>
              </dd>
            </div>
            <div className={styles.detail}>
              <dt className="sr-only">Phone</dt>
              <dd>
                <Icon name="phone" size={18} />
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
              </dd>
            </div>
            <div className={styles.detail}>
              <dt className="sr-only">Email</dt>
              <dd>
                <Icon name="mail" size={18} />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </dd>
            </div>
            <div className={styles.detail}>
              <dt className="sr-only">Opening hours</dt>
              <dd>
                <Icon name="clock" size={18} />
                <span>
                  {SITE.hours.weekday}<br />
                  {SITE.hours.saturday}
                </span>
              </dd>
            </div>
          </dl>

          {/* Map placeholder */}
          <div className={styles.mapPlaceholder} aria-label="Map placeholder">
            <Icon name="map-pin" size={32} />
            <span>Stockport, Greater Manchester</span>
          </div>
        </div>

        {/* Form */}
        <form action={formAction} className={styles.form} noValidate>
          {state.status === "error" && (
            <div className={styles.errorBanner} role="alert">
              {state.message}
            </div>
          )}

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>
                Full name <span aria-hidden="true" className={styles.required}>*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={styles.input}
                placeholder="James Hargreaves"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                Email address <span aria-hidden="true" className={styles.required}>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={styles.input}
                placeholder="james@example.co.uk"
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="phone" className={styles.label}>
              Phone number <span className={styles.optional}>(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={styles.input}
              placeholder="0161 000 0000"
            />
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="service" className={styles.label}>Service needed</label>
              <select id="service" name="service" className={styles.select} defaultValue="">
                <option value="" disabled>Select a service…</option>
                <option value="interior">Interior Painting</option>
                <option value="exterior">Exterior Painting</option>
                <option value="wallpapering">Wallpapering</option>
                <option value="fence">Fence &amp; Gate</option>
                <option value="decorating">Decorating &amp; Finishing</option>
                <option value="commercial">Commercial</option>
                <option value="other">Other / Not sure</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="source" className={styles.label}>How did you find us?</label>
              <select id="source" name="source" className={styles.select} defaultValue="">
                <option value="" disabled>Select…</option>
                <option value="google">Google</option>
                <option value="facebook">Facebook</option>
                <option value="recommendation">Recommendation</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>
              Tell us about your project <span aria-hidden="true" className={styles.required}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className={styles.textarea}
              placeholder="E.g. &ldquo;We need the entire exterior of a 3-bed semi repainting, including fascias and soffits. Looking to get started in April.&rdquo;"
            />
          </div>

          <button type="submit" disabled={pending} className={`btn btn-primary btn-lg ${styles.submit}`}>
            {pending ? "Sending…" : "Send My Enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}

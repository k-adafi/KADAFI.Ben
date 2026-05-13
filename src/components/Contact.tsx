import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';
import codeimage from '../assets/code.jpg';
import { useLanguage } from '../context/LanguageCore';
import FadeInSection from './FadeInSection';

const Contact = () => {
  const { t } = useLanguage();

  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      value: 'kadafiben196@gmail.com',
      href: 'mailto:kadafiben196@gmail.com',
      delay: 0,
      animation: "up"
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      value: '+261 34 14 566 79',
      href: 'tel:+261341456679',
      delay: 0.1,
      animation: "left"
    },
    {
      icon: MapPin,
      title: t('contact.locationTitle'),
      value: t('contact.location'),
      delay: 0.2,
      animation: "right"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/kadafy.man.3', label: 'Facebook', animation: "up" },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kadafi-ben-0312a3265/', label: 'LinkedIn', animation: "up" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-24 bg-resume-bg dark:bg-resume-bg transition-colors duration-300">
      <div className="container mx-auto px-4">
        <FadeInSection direction="up" delay={0.1}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-resume-text">
              {t('contact.title')} <span className="text-accent-yellow">{t('contact.highlight')}</span>
            </h2>
          </motion.div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeInSection key={index} direction={item.animation} delay={item.delay}>
                  <motion.a
                    key={index}
                    href={item.href}
                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                    rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    variants={itemVariants}
                    className="card-hover group flex items-start gap-4 p-6 cursor-pointer"
                    whileHover={{ x: 8 }}
                  >
                    {/* Icon Container */}
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-accent-yellow to-yellow-300 rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-accent-yellow/30 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon size={24} className="text-black" />
                    </motion.div>

                    {/* Content */}
                    <div className="pt-1">
                      <h3 className="text-resume-text font-bold text-lg mb-1 group-hover:text-accent-yellow transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-resume-text-secondary text-sm">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                </FadeInSection>
                
              );
            })}

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-800"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a 
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                    <span>{social.label}</span>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Image */}
          <FadeInSection direction="up" delay={0.1}>
            <motion.div 
              className="overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={codeimage}
                alt="Code design"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
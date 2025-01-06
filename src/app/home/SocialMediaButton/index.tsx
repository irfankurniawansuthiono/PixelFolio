import ButtonChoose from '@/app/utils/ButtonChoose';
import { motion } from 'framer-motion';

export default function SocialMediaButton() {
    // Daftar ikon dengan href masing-masing
    const socialMediaLinks = [
        { icon: 'whatsapp', href: 'https://wa.me/6285159411104' },
        { icon: 'twitter', href: 'https://x.com/Suthiono_irfan' },
        { icon: 'facebook', href: 'https://www.facebook.com/profile.php?id=100022097349921' },
        { icon: 'instagram', href: 'https://instagram.com/irfan_suthiono' },
        { icon: 'linkedin', href: 'https://www.linkedin.com/in/irfankurniawans' },
        { icon: 'github', href: 'https://github.com/irfankurniawansuthiono' },
        { icon: 'gmail', href: 'mailto:kurniawanmarc93@gmail.com' },
    ];

    return (
        <>
            {/* Ikon Media Sosial di layar besar */}
            <motion.div
                className="hidden md:flex justify-between w-full items-center h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {socialMediaLinks.map((item, index) => (
                    <motion.a
                        onClick={ButtonChoose}
                        key={item.icon}
                        target="_blank"
                        href={item.href}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: index * 0.2, // Delay meningkat setiap ikon
                        }}
                    >
                        <i className={`nes-icon ${item.icon} is-large`} />
                    </motion.a>
                ))}
            </motion.div>

            {/* Ikon Media Sosial di layar kecil */}
            <motion.div
                className="flex md:hidden justify-between w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
                {socialMediaLinks.map((item, index) => (
                    <motion.a
                        key={item.icon}
                        href={item.href}
                        target="_blank"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: index * 0.2, // Delay meningkat setiap ikon
                        }}
                    >
                        <i className={`nes-icon ${item.icon}`} />
                    </motion.a>
                ))}
            </motion.div>
        </>
    );
}

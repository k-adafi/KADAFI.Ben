import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { EASE } from './motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const offset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 32 },
  right: { x: -32 },
  none: {},
};

/**
 * Animates content in when it scrolls into view and back out when it leaves,
 * in both scroll directions. Reduced-motion users get a plain fade (see <MotionConfig> in App).
 */
export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className,
}: {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.15, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div>
      <Reveal direction="right">
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="h2">{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.12}>
          <p className="lead">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}

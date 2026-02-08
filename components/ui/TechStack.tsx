'use client'

import { motion } from 'framer-motion'
import { Tooltip } from './Tooltip'
import { cn } from '@/lib/utils/cn'

export interface TechItem {
  name: string
  icon: React.ReactNode
}

interface TechStackProps {
  items: TechItem[]
  className?: string
  columns?: number
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

export function TechStack({
  items,
  className,
  columns = 6,
}: TechStackProps) {
  return (
    <motion.div
      className={cn('grid gap-3', className)}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ staggerChildren: 0.05 }}
    >
      {items.map((item) => (
        <Tooltip key={item.name} content={item.name}>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.15, y: -2 }}
            className="flex items-center justify-center p-3 rounded-xl transition-colors duration-200 cursor-default"
            style={{
              backgroundColor: 'var(--surface-secondary)',
              color: 'var(--text-secondary)',
            }}
          >
            {item.icon}
          </motion.div>
        </Tooltip>
      ))}
    </motion.div>
  )
}

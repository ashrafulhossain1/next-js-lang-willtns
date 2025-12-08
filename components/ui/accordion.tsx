'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Plus, Minus } from 'lucide-react';

import { cn } from '@/lib/utils';

function Accordion(
  props: React.ComponentProps<typeof AccordionPrimitive.Root>,
) {
  return <AccordionPrimitive.Root {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn('border-b last:border-b-0', className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          'flex w-full items-center justify-between py-4 text-left text-sm font-medium transition-all outline-none [&[data-state=open]_.plus]:hidden [&[data-state=open]_.minus]:block',
          className,
        )}
        {...props}
      >
        {/* LEFT TEXT */}
        <span>{children}</span>

        {/* RIGHT ICON */}
        <span className="ml-4 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#FF9500]">
          {/* PLUS */}
          <Plus className="plus h-4 w-4 text-[#30204D]" />

          {/* MINUS */}
          <Minus className="minus hidden h-4 w-4 text-[#30204D]" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

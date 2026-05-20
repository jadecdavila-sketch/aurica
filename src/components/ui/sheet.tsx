"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
}) {
  // Programmatic-close ref. For bottom drawers, a swipe-down past the
  // dismiss threshold fires this hidden Close so Radix's normal close
  // path (and the parent Sheet's onOpenChange) still drives state.
  const closeRef = React.useRef<HTMLButtonElement>(null)
  const contentRef = React.useRef<HTMLDivElement>(null)
  const drag = React.useRef({ startY: 0, startTime: 0, active: false })

  // Swipe-to-dismiss, bottom drawers only, and only when the content is
  // scrolled to its top - so mid-scroll downward swipes still scroll the
  // drawer's contents instead of dismissing the drawer.
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (side !== "bottom") return
    if ((contentRef.current?.scrollTop ?? 0) > 0) return
    drag.current = {
      startY: e.touches[0].clientY,
      startTime: Date.now(),
      active: true,
    }
  }

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!drag.current.active) return
    const dy = e.touches[0].clientY - drag.current.startY
    const el = contentRef.current
    if (!el) return
    if (dy <= 0) {
      // Pulling up - cancel so the content's own scroll takes over.
      drag.current.active = false
      el.style.transform = ""
      el.style.transition = ""
      return
    }
    el.style.transition = "none"
    el.style.transform = `translateY(${dy}px)`
  }

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!drag.current.active) return
    const dy = e.changedTouches[0].clientY - drag.current.startY
    const elapsed = Date.now() - drag.current.startTime
    const velocity = dy / Math.max(elapsed, 1)
    drag.current.active = false
    const el = contentRef.current
    if (!el) return

    // Dismiss on a long drag OR a quick downward flick.
    const dismiss = dy > 100 || (dy > 40 && velocity > 0.5)
    if (dismiss) {
      // Hand off to Radix - clear the inline transform first so the
      // slide-out keyframe takes over cleanly.
      el.style.transform = ""
      el.style.transition = ""
      closeRef.current?.click()
    } else {
      // Snap back.
      el.style.transition = "transform 220ms cubic-bezier(0.22, 0.61, 0.36, 1)"
      el.style.transform = ""
    }
  }

  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        ref={contentRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        )}
        {...props}
      >
        {/* Mobile drag handle on bottom drawers - signals the swipe-down
            dismiss gesture. Decorative; the whole panel is the hit target. */}
        {side === "bottom" && (
          <div
            aria-hidden
            className="md:hidden absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-ink/15 pointer-events-none"
          />
        )}
        {children}
        <SheetPrimitive.Close
          ref={closeRef}
          className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none"
        >
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 px-6 pt-6 pb-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}

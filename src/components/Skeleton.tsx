interface SkeletonProps {
  className?: string;
  dark?: boolean;
}

export function SkeletonBlock({ className = '', dark = false }: SkeletonProps) {
  return (
    <div
      className={`${dark ? 'skeleton-dark' : 'skeleton-light'} ${className}`}
      role="presentation"
      aria-hidden="true"
    />
  );
}

export function SkeletonLine({ className = '', dark = false }: SkeletonProps) {
  return (
    <div
      className={`h-4 ${dark ? 'skeleton-dark' : 'skeleton-light'} ${className}`}
      role="presentation"
      aria-hidden="true"
    />
  );
}

export function SkeletonCircle({ className = '', dark = false }: SkeletonProps) {
  return (
    <div
      className={`rounded-full ${dark ? 'skeleton-dark' : 'skeleton-light'} ${className}`}
      role="presentation"
      aria-hidden="true"
    />
  );
}

/** Gallery card skeleton — dark variant for the dark section */
export function GalleryCardSkeleton() {
  return (
    <div
      className="relative h-[340px] sm:h-[400px] rounded-3xl overflow-hidden"
      role="presentation"
      aria-hidden="true"
    >
      <SkeletonBlock dark className="w-full h-full rounded-3xl" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 gap-3">
        <SkeletonLine dark className="w-3/4 rounded-lg" />
        <SkeletonLine dark className="w-1/3 rounded-lg opacity-60" />
      </div>
    </div>
  );
}

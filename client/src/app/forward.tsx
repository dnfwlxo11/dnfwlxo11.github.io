export default function forword() {
  return (
    <div className="w-full h-14 sm:h-20 flex items-center gap-8 px-6 sm:px-24 top-0 sticky z-10 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex gap-6 font-semibold text-sm sm:text-base tracking-tight">
        <a href="#home" className="cursor-pointer text-muted transition-colors hover:text-foreground">HOME</a>
        <a href="#skill" className="cursor-pointer text-muted transition-colors hover:text-foreground">SKILL</a>
        <a href="#project" className="cursor-pointer text-muted transition-colors hover:text-foreground">PROJECT</a>
      </div>
    </div>
  )
}

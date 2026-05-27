import React from "react";
import Image from "next/image";
// TODO: Restore imports when About dialog is re-enabled
// import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
// import { VisuallyHidden } from "./ui/visually-hidden";
// import { About } from "./About";

interface LogoProps {
    isCollapsed: boolean;
}

const Logo = React.forwardRef<HTMLElement, LogoProps>(({ isCollapsed }, ref) => {
  // TODO: Restore About dialog trigger — commented out during rebranding
  // return (
  //   <Dialog aria-describedby={undefined}>
  //     {isCollapsed ? (
  //       <DialogTrigger asChild>
  //         <button ref={ref} className="flex items-center justify-start mb-2 cursor-pointer bg-transparent border-none p-0 hover:opacity-80 transition-opacity">
  //           <Image src="/logo-collapsed.png" alt="Logo" width={40} height={32} />
  //         </button>
  //       </DialogTrigger>
  //     ) : (
  //       <DialogTrigger asChild>
  //         <span className="text-lg text-center border rounded-full bg-blue-50 border-white font-semibold text-gray-700 mb-2 block items-center cursor-pointer hover:opacity-80 transition-opacity">
  //           <span>Wick Meet</span>
  //         </span>
  //       </DialogTrigger>
  //     )}
  //     <DialogContent>
  //       <VisuallyHidden>
  //         <DialogTitle>About Wick Meet</DialogTitle>
  //       </VisuallyHidden>
  //       <About />
  //     </DialogContent>
  //   </Dialog>
  // );

  return (
    <span ref={ref}>
      {isCollapsed ? (
        <Image src="/logo-collapsed.png" alt="Logo" width={40} height={32} />
      ) : (
        <span className="text-lg text-center border rounded-full bg-blue-50 border-white font-semibold text-gray-700 mb-2 block items-center">
          <span>Wick Meet</span>
        </span>
      )}
    </span>
  );
});

Logo.displayName = "Logo";

export default Logo;
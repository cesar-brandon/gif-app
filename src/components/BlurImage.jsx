import { useState } from "react";
import { cn } from "../lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Copy } from "lucide-react";

const BlurImage = (props) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Dialog>
      <DialogTrigger className="w-full h-full">
        <img
          {...props}
          className={cn(
            props.className,
            "w-full h-full object-cover duration-700 ease-in-out",
            isLoading ? "scale-105 blur-lg" : "scale-100 blur-0"
          )}
          onLoad={() => setLoading(false)}
        />
        <div className="absolute m-2 p-2 bottom-0 left-0 bg-white rounded-md opacity-0 
                transition-opacity duration-300 ease-in-out group-hover/gif:opacity-100">
          <p className="line-clamp-1">{props.title}</p>
        </div>

      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <img
          {...props}
          className={cn(
            props.className,
            "w-full h-full object-cover duration-700 ease-in-out rounded-md",
            isLoading ? "scale-105 blur-lg" : "scale-100 blur-0"
          )}
          onLoad={() => setLoading(false)}
        />

        <DialogHeader>
          <DialogTitle>Compartir enlace</DialogTitle>
          <DialogDescription>
            Cualquiera que tenga este enlace podrá verlo.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue={props.src}
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  );
};

export default BlurImage;

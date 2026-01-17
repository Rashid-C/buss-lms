import { cn } from "@/lib/utils";
import { CloudUploadIcon, ImageIcon } from "lucide-react";
import { Button } from "../ui/button";

export function RenderEmptyState({ isDragActive }: { isDragActive: boolean }) {
    return (
        <div className="text-center">
            <div className="flex items-center mx-auto justify-center size-12 mb-4 rounded-full bg-muted">
                <CloudUploadIcon className={cn("size-6 text-muted-foreground", isDragActive && "text-primary")} />
            </div>
            <p className="text-base font-semibold text-foreground ">Drop your files here or <span className="text-primary font-bold cursor-pointer">click to upload</span></p>
            <Button type="button" className="mt-4">
                Select File
            </Button>
        </div>
    )
}



//
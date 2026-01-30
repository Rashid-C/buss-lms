'use client'
import { useCallback } from 'react'
import { FileRejection, useDropzone } from 'react-dropzone'
import { Card, CardContent } from '../ui/card'
import { cn } from '@/lib/utils'
import { RenderEmptyState, RenderErrorState } from './RenderState'
import { toast } from 'sonner'

export function Uploader() {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        console.log(acceptedFiles)
    }, [])

    function rejectedfiles(fileRejection: FileRejection[]) {
        if (fileRejection.length) {
            const tooManyFiles = fileRejection.find((rejection) => rejection.errors[0].code === 'too-many-files')

            const fileSizeToBig = fileRejection.find((rejection) => rejection.errors[0].code === 'file-too-large')

            if (fileSizeToBig) {
                toast.error('File size exceeds the 5MB limit.')
            }

            if (tooManyFiles) {
                toast.error('You can only upload one file at a time.')
            }
        }

    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        maxFiles: 1,
        multiple: false,
        maxSize: 5 * 1024 * 1024, // 5 MB
        onDropRejected: rejectedfiles,

    })
    return (
        <Card
            {...getRootProps()}
            className={cn(
                'relative border-2 border-dashed transition-colors duration-200 w-full h-64',
                isDragActive
                    ? 'border-primary bg-primary/10 border-solid '
                    : 'border-border hover:border-primary',
            )}
        >
            <CardContent className='flex items-center justify-center h-full w-full p-4'>
                <input {...getInputProps()} />
                <RenderEmptyState isDragActive={isDragActive} />
            </CardContent>
        </Card>
    )
}

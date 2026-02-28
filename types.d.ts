import z from 'zod';
import { UploadSchema } from '@/lib/zod';


export interface BookCardProps {
  title: string;
  author: string;
  coverURL: string;
  slug: string;
}

export interface FileUploadFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: FieldPath<T>;
    label: string;
    acceptTypes: string[];
    disabled?: boolean;
    icon: LucideIcon;
    placeholder: string;
    hint: string;
}
import {PLANS, PlanType} from "@/lib/subscription-constants";



export interface VoiceSelectorProps {
    disabled?: boolean;
    className?: string;
    value?: string;
    onChange: (voiceId: string) => void;
}

export type BookUploadFormValues = z.infer<typeof UploadSchema>;
import z from 'zod';
import { UploadSchema } from '@/lib/zod';
import {PLANS, PlanType} from "@/lib/subscription-constants";
import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { LucideIcon } from 'lucide-react';

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



export interface VoiceSelectorProps {
    disabled?: boolean;
    className?: string;
    value?: string;
    onChange: (voiceId: string) => void;
}

export type BookUploadFormValues = z.infer<typeof UploadSchema>;
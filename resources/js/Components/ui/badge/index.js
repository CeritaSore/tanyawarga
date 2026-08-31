import { cva } from 'class-variance-authority';

export { default as Badge } from './Badge.vue';

export const badgeVariants = cva(
    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2',
    {
        variants: {
            variant: {
                default:
                    'border-transparent bg-emerald-600 text-white shadow hover:bg-emerald-700',
                secondary:
                    'border-transparent bg-slate-100 text-slate-800 hover:bg-slate-200',
                destructive:
                    'border-transparent bg-rose-600 text-white shadow hover:bg-rose-700',
                outline: 'text-slate-900 border-slate-200',
                emerald:
                    'border-emerald-200 bg-emerald-50 text-emerald-700',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

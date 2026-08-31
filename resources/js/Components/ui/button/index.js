import { cva } from 'class-variance-authority';

export { default as Button } from './Button.vue';

export const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default:
                    'bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 active:bg-emerald-800',
                success:
                    'bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 active:bg-emerald-800',
                warning:
                    'bg-amber-500 text-white shadow-sm hover:bg-amber-600 active:bg-amber-700',
                destructive:
                    'bg-rose-600 text-white shadow-sm hover:bg-rose-700 active:bg-rose-800',
                danger:
                    'bg-rose-600 text-white shadow-sm hover:bg-rose-700 active:bg-rose-800',
                outline:
                    'border border-slate-200 bg-white text-slate-700 shadow-xs hover:bg-slate-50 hover:text-slate-900',
                secondary:
                    'bg-slate-100 text-slate-800 hover:bg-slate-200',
                ghost:
                    'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                link:
                    'text-emerald-600 underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-8 rounded-md px-3 text-xs',
                lg: 'h-12 rounded-xl px-8 text-base font-semibold',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

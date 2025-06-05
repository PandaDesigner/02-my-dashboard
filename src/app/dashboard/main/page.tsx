import WidgetsGrid from '@/components/dashboard/WidgetsGrid';

export const metadata = {
    title: 'Main Page',
    description: 'Main Page'
}

export default function MainPage() {
    return (
        <div className='p-2 flex flex-col gap-4'>
            <h1 className='text-5xl font-bold text-indigo-600'>Dashboard</h1>
            <p className="text-slate-500">Manage your actions and activities</p>
            <WidgetsGrid />
        </div>
    );
}
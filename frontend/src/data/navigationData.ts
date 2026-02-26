export interface NavLevel3Item {
    id: string;
    label: string;
    href: string;
    icon?: string;
}

export interface NavLevel2Item {
    id: string;
    label: string;
    href: string;
    description?: string;
    children?: NavLevel3Item[];
}

export interface NavLevel1Item {
    id: string;
    label: string;
    href: string;
    children?: NavLevel2Item[];
}

export const navigationData: NavLevel1Item[] = [
    {
        id: 'products',
        label: 'Products',
        href: '#products',
        children: [
            {
                id: 'web-apps',
                label: 'Web Applications',
                href: '#web-apps',
                description: 'Full-stack web solutions',
                children: [
                    { id: 'spa', label: 'Single Page Apps', href: '#spa' },
                    { id: 'ssr', label: 'Server-Side Rendering', href: '#ssr' },
                    { id: 'pwa', label: 'Progressive Web Apps', href: '#pwa' },
                    { id: 'jamstack', label: 'JAMstack Sites', href: '#jamstack' },
                ],
            },
            {
                id: 'mobile',
                label: 'Mobile Apps',
                href: '#mobile',
                description: 'iOS & Android solutions',
                children: [
                    { id: 'ios', label: 'iOS Development', href: '#ios' },
                    { id: 'android', label: 'Android Development', href: '#android' },
                    { id: 'cross-platform', label: 'Cross-Platform', href: '#cross-platform' },
                ],
            },
            {
                id: 'desktop',
                label: 'Desktop Software',
                href: '#desktop',
                description: 'Native desktop experiences',
                children: [
                    { id: 'windows', label: 'Windows Apps', href: '#windows' },
                    { id: 'macos', label: 'macOS Apps', href: '#macos' },
                    { id: 'linux', label: 'Linux Apps', href: '#linux' },
                ],
            },
            {
                id: 'api',
                label: 'API & Backend',
                href: '#api',
                description: 'Scalable backend services',
            },
            {
                id: 'cloud',
                label: 'Cloud Services',
                href: '#cloud',
                description: 'Infrastructure & DevOps',
            },
        ],
    },
    {
        id: 'solutions',
        label: 'Solutions',
        href: '#solutions',
        children: [
            {
                id: 'enterprise',
                label: 'Enterprise',
                href: '#enterprise',
                description: 'Large-scale business solutions',
                children: [
                    { id: 'erp', label: 'ERP Systems', href: '#erp' },
                    { id: 'crm', label: 'CRM Platforms', href: '#crm' },
                    { id: 'bi', label: 'Business Intelligence', href: '#bi' },
                    { id: 'workflow', label: 'Workflow Automation', href: '#workflow' },
                ],
            },
            {
                id: 'startup',
                label: 'Startups',
                href: '#startup',
                description: 'Fast-track your MVP',
                children: [
                    { id: 'mvp', label: 'MVP Development', href: '#mvp' },
                    { id: 'prototype', label: 'Rapid Prototyping', href: '#prototype' },
                    { id: 'growth', label: 'Growth Engineering', href: '#growth' },
                ],
            },
            {
                id: 'ecommerce',
                label: 'E-Commerce',
                href: '#ecommerce',
                description: 'Online retail platforms',
                children: [
                    { id: 'storefront', label: 'Custom Storefronts', href: '#storefront' },
                    { id: 'payments', label: 'Payment Integration', href: '#payments' },
                    { id: 'inventory', label: 'Inventory Management', href: '#inventory' },
                ],
            },
            {
                id: 'healthcare',
                label: 'Healthcare',
                href: '#healthcare',
                description: 'HIPAA-compliant systems',
            },
        ],
    },
    {
        id: 'platform',
        label: 'Platform',
        href: '#platform',
        children: [
            {
                id: 'analytics',
                label: 'Analytics',
                href: '#analytics',
                description: 'Data-driven insights',
                children: [
                    { id: 'realtime', label: 'Real-time Dashboards', href: '#realtime' },
                    { id: 'reports', label: 'Custom Reports', href: '#reports' },
                    { id: 'ml', label: 'ML Predictions', href: '#ml' },
                ],
            },
            {
                id: 'security',
                label: 'Security',
                href: '#security',
                description: 'Enterprise-grade protection',
                children: [
                    { id: 'auth', label: 'Authentication', href: '#auth' },
                    { id: 'encryption', label: 'Data Encryption', href: '#encryption' },
                    { id: 'audit', label: 'Audit Logs', href: '#audit' },
                ],
            },
            {
                id: 'integrations',
                label: 'Integrations',
                href: '#integrations',
                description: 'Connect your tools',
                children: [
                    { id: 'slack', label: 'Slack', href: '#slack' },
                    { id: 'github', label: 'GitHub', href: '#github' },
                    { id: 'jira', label: 'Jira', href: '#jira' },
                    { id: 'zapier', label: 'Zapier', href: '#zapier' },
                ],
            },
            {
                id: 'devtools',
                label: 'Developer Tools',
                href: '#devtools',
                description: 'SDKs and APIs',
            },
        ],
    },
    {
        id: 'resources',
        label: 'Resources',
        href: '#resources',
        children: [
            {
                id: 'docs',
                label: 'Documentation',
                href: '#docs',
                description: 'Guides and references',
                children: [
                    { id: 'quickstart', label: 'Quick Start', href: '#quickstart' },
                    { id: 'api-ref', label: 'API Reference', href: '#api-ref' },
                    { id: 'tutorials', label: 'Tutorials', href: '#tutorials' },
                ],
            },
            {
                id: 'blog',
                label: 'Blog',
                href: '#blog',
                description: 'News and insights',
                children: [
                    { id: 'engineering', label: 'Engineering', href: '#engineering' },
                    { id: 'design', label: 'Design', href: '#design' },
                    { id: 'product', label: 'Product Updates', href: '#product' },
                ],
            },
            {
                id: 'community',
                label: 'Community',
                href: '#community',
                description: 'Join the conversation',
                children: [
                    { id: 'forum', label: 'Forum', href: '#forum' },
                    { id: 'discord', label: 'Discord', href: '#discord' },
                    { id: 'events', label: 'Events', href: '#events' },
                ],
            },
            {
                id: 'support',
                label: 'Support',
                href: '#support',
                description: 'Get help fast',
            },
        ],
    },
    {
        id: 'company',
        label: 'Company',
        href: '#company',
        children: [
            {
                id: 'about',
                label: 'About Us',
                href: '#about',
                description: 'Our story and mission',
                children: [
                    { id: 'team', label: 'Our Team', href: '#team' },
                    { id: 'culture', label: 'Culture & Values', href: '#culture' },
                    { id: 'history', label: 'Our History', href: '#history' },
                ],
            },
            {
                id: 'careers',
                label: 'Careers',
                href: '#careers',
                description: 'Join our team',
                children: [
                    { id: 'engineering-jobs', label: 'Engineering', href: '#engineering-jobs' },
                    { id: 'design-jobs', label: 'Design', href: '#design-jobs' },
                    { id: 'sales-jobs', label: 'Sales', href: '#sales-jobs' },
                ],
            },
            {
                id: 'press',
                label: 'Press',
                href: '#press',
                description: 'Media resources',
            },
            {
                id: 'contact',
                label: 'Contact',
                href: '#contact',
                description: 'Get in touch',
            },
        ],
    },
];


// data.js - Static Content for Portfolio

const settings = {
    facebook_url: 'https://web.facebook.com/louie.ilustrisimo.3',
    github_url: 'https://github.com/michy2005',
    linkedin_url: 'https://www.linkedin.com/in/louieamazing-undefined-9710aa33a/',
    receiving_email: 'louieamazingilustrisimo@gmail.com',
    sender_email: 'louieabout.page@gmail.com'
};

const languages = [
    {
        name: 'HTML5',
        icon_svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.325 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>',
        color: 'text-orange-500'
    },
    {
        name: 'CSS3',
        icon_svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>',
        color: 'text-blue-500'
    },
    {
        name: 'JavaScript',
        icon_svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-1.095.402-2.239.402-3.64.015-1.995 0-3.99 0-5.94z"/></svg>',
        color: 'text-yellow-400'
    },
    {
        name: 'MySQL',
        icon_svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 4.97 0 11.103c0 6.132 5.374 11.103 12 11.103 6.627 0 12-4.97 12-11.103C24 4.97 18.627 0 12 0zm5 16.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM7 16.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>',
        color: 'text-blue-600'
    },
    {
        name: 'Supabase',
        icon_svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.362 9.354H10.032L13.755.772a.667.667 0 0 0-.916-.723L2.457 7.14a.667.667 0 0 0 .151 1.23h11.234l-3.87 8.578a.667.667 0 0 0 .915.724l10.384-7.09a.667.667 0 0 0-.15-1.23h.241z"/></svg>',
        color: 'text-emerald-500'
    },
    {
        name: 'Firebase',
        icon_svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.7 3.5L2.1 6.5C1.8 7.1 1.8 7.8 2.2 8.4L10.3 22.8C10.6 23.3 11.2 23.3 11.5 22.8L21.3 5.4C21.6 4.9 21.6 4.3 21.3 3.8L19.7 0.9C19.4 0.3 18.6 0.3 18.2 0.9L11.5 12.8C11.2 13.3 10.6 13.3 10.3 12.8L5.2 3.7C4.8 3.1 4 3.1 3.7 3.5Z" fill="#FFCA28"/><path d="M12.9 14.8L18.2 0.9C18.6 0.3 19.4 0.3 19.7 0.9L21.3 3.8C21.6 4.3 21.6 4.9 21.3 5.4L12.9 20.3L12.9 14.8Z" fill="#FFA000"/><path d="M10.3 12.8L3.7 3.5C3.3 3.1 2.5 3.1 2.1 3.7L5.2 12.8L10.3 12.8Z" fill="#F57C00"/></svg>',
        color: 'text-orange-400'
    },
    {
        name: 'React',
        icon_svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-1.38 0-2.61.08-3.71.23-1.41.2-2.67.57-3.75 1.1C3.01 2.05 1.73 3.17 1 4.69c.9-.53 2.16-1.05 3.55-1.49 1.4-.44 2.92-.76 4.54-.95 1.34-1.27 3.01-2.16 4.91-2.25 1.9-.09 3.57.8 4.91 2.25 1.62.19 3.14.51 4.54.95 1.39.44 2.65.96 3.55 1.49-.73-1.52-2.01-2.64-3.54-3.36-1.08-.53-2.34-.9-3.75-1.1C14.61.08 13.38 0 12 0zm0 2.21c1.33.02 2.62.14 3.82.35 1.25.22 2.37.58 3.33 1.05.59-.88 1.01-1.92 1.05-3.08-.04-1.16-.46-2.2-1.05-3.08-.96.47-2.08.83-3.33 1.05-1.2.21-2.49.33-3.82.35-.01.01-.02.01-.03.02-.38.86-.67 1.83-.73 2.87.06 1.04.35 2.01.73 2.87.01 0 .02.01.03.02zm0 8.01c-.8 0-1.53-.18-2.18-.49-1.3-.61-2.36-1.57-2.95-2.69.59-1.12 1.65-2.08 2.95-2.69.65-.31 1.38-.49 2.18-.49s1.53.18 2.18.49c1.3.61 2.36 1.57 2.95 2.69-.59 1.12-1.65 2.08-2.95 2.69-.65.31-1.38.49-2.18.49zm0-1.39c.39 0 .69-.3.69-.69 0-.39-.3-.69-.69-.69-.39 0-.69.3-.69.69 0 .39.3.69.69.69zm-4.54 1.33c.06-1.04.35-2.01.73-2.87-.01 0-.02-.01-.03-.02-1.33-.02-2.62-.14-3.82-.35-1.25-.22-2.37-.58-3.33-1.05-.59.88-1.01 1.92-1.05 3.08.04 1.16.46 2.2 1.05 3.08.96-.47 2.08-.83 3.33-1.05 1.2-.21 2.49-.33 3.82-.35.01-.01.02-.01.03-.02-.38-.86-.67-1.83-.73-2.87zm9.08 0c-.06 1.04-.35 2.01-.73 2.87.01 0 .02.01.03.02 1.33.02 2.62.14 3.82.35 1.25.22 2.37.58 3.33 1.05.59-.88 1.01-1.92 1.05-3.08-.04-1.16-.46-2.2-1.05-3.08-.96.47-2.08.83-3.33 1.05-1.2.21-2.49.33-3.82-.35-.01.01-.02.01-.03.02.38.86.67 1.83.73 2.87zM12 14.2c-1.34 1.27-3.01 2.16-4.91 2.25-1.9.09-3.57-.8-4.91-2.25-1.62-.19-3.14-.51-4.54-.95-1.39-.44-2.65-.96-3.55-1.49.73 1.52 2.01 2.64 3.54 3.36 1.08.53 2.34.9 3.75 1.1 1.1.15 2.33.23 3.71.23 1.38 0 2.61-.08 3.71-.23 1.41-.2 2.67-.57 3.75-1.1 1.53-.72 2.81-1.84 3.54-3.36-.9-.53-2.16-1.05-3.55-1.49-1.4-.44-2.92-.76-4.54-.95z"/></svg>',
        color: 'text-cyan-400'
    },
    {
        name: 'React Native',
        icon_svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-1.38 0-2.61.08-3.71.23-1.41.2-2.67.57-3.75 1.1C3.01 2.05 1.73 3.17 1 4.69c.9-.53 2.16-1.05 3.55-1.49 1.4-.44 2.92-.76 4.54-.95 1.34-1.27 3.01-2.16 4.91-2.25 1.9-.09 3.57.8 4.91 2.25 1.62.19 3.14.51 4.54.95 1.39.44 2.65.96 3.55 1.49-.73-1.52-2.01-2.64-3.54-3.36-1.08-.53-2.34-.9-3.75-1.1C14.61.08 13.38 0 12 0zm0 2.21c1.33.02 2.62.14 3.82.35 1.25.22 2.37.58 3.33 1.05.59-.88 1.01-1.92 1.05-3.08-.04-1.16-.46-2.2-1.05-3.08-.96.47-2.08.83-3.33 1.05-1.2.21-2.49.33-3.82.35-.01.01-.02.01-.03.02-.38.86-.67 1.83-.73 2.87.06 1.04.35 2.01.73 2.87.01 0 .02.01.03.02zm0 8.01c-.8 0-1.53-.18-2.18-.49-1.3-.61-2.36-1.57-2.95-2.69.59-1.12 1.65-2.08 2.95-2.69.65-.31 1.38-.49 2.18-.49s1.53.18 2.18.49c1.3.61 2.36 1.57 2.95 2.69-.59 1.12-1.65 2.08-2.95 2.69-.65.31-1.38.49-2.18.49zm0-1.39c.39 0 .69-.3.69-.69 0-.39-.3-.69-.69-.69-.39 0-.69.3-.69.69 0 .39.3.69.69.69zm-4.54 1.33c.06-1.04.35-2.01.73-2.87-.01 0-.02-.01-.03-.02-1.33-.02-2.62-.14-3.82-.35-1.25-.22-2.37-.58-3.33-1.05-.59.88-1.01 1.92-1.05 3.08.04 1.16.46 2.2 1.05 3.08.96-.47 2.08-.83 3.33-1.05 1.2-.21 2.49-.33 3.82-.35.01-.01.02-.01.03-.02-.38-.86-.67-1.83-.73-2.87zm9.08 0c-.06 1.04-.35 2.01-.73 2.87.01 0 .02.01.03.02 1.33.02 2.62.14 3.82.35 1.25.22 2.37.58 3.33 1.05.59-.88 1.01-1.92 1.05-3.08-.04-1.16-.46-2.2-1.05-3.08-.96.47-2.08.83-3.33 1.05-1.2.21-2.49.33-3.82-.35-.01.01-.02.01-.03.02.38.86.67 1.83.73 2.87zM12 14.2c-1.34 1.27-3.01 2.16-4.91 2.25-1.9.09-3.57-.8-4.91-2.25-1.62-.19-3.14-.51-4.54-.95-1.39-.44-2.65-.96-3.55-1.49.73 1.52 2.01 2.64 3.54 3.36 1.08.53 2.34.9 3.75 1.1 1.1.15 2.33.23 3.71.23 1.38 0 2.61-.08 3.71-.23 1.41-.2 2.67-.57 3.75-1.1 1.53-.72 2.81-1.84 3.54-3.36-.9-.53-2.16-1.05-3.55-1.49-1.4-.44-2.92-.76-4.54-.95z"/></svg>',
        color: 'text-violet-500'
    }
];

const expertise = [
    {
        id: 10,
        heading: 'Full-Stack Application Development',
        title: 'PHP / MySQL / JS',
        description: 'Proven ability to build, manage, and deploy robust, data-driven web applications from database schema to responsive mobile-web frontends.',
        icon_text: '📱',
        icon_type: 'emoji',
        border_color: 'sky-600',
        display_order: 0
    },
    {
        id: 11,
        heading: 'Real-Time Sensor & Camera Logic',
        title: 'Computer Vision',
        description: 'Practical experience integrating real-time camera feeds and implementing advanced logic for facial and emotion detection analysis.',
        icon_text: '💻',
        icon_type: 'text',
        border_color: 'sky-600',
        display_order: 0
    },
    {
        id: 12,
        heading: 'AI Problem Solving & Optimization',
        title: 'AI Prompt Engineering',
        description: 'Specialized in using AI prompts to analyze complex problems, generate efficient code, and optimize development workflows.',
        icon_text: '🤖',
        icon_type: 'emoji',
        border_color: 'sky-600',
        display_order: 0
    },
    {
        id: 13,
        heading: 'Mobile Web & Responsiveness',
        title: '📱',
        description: 'Focus on delivering optimal mobile web experiences, ensuring cross-device functionality and excellent user interface design.',
        icon_text: null,
        icon_type: 'text',
        border_color: 'sky-600',
        display_order: 0
    },
    {
        id: 14,
        heading: 'Documentation & Reports',
        title: '✍️',
        description: 'Clear, precise writing for user manuals, technical specifications, and detailed project reports, ensuring clarity in communication.',
        icon_text: null,
        icon_type: 'text',
        border_color: 'sky-600',
        display_order: 0
    },
    {
        id: 15,
        heading: 'Task Automation & Efficiency',
        title: '⏱️',
        description: 'A strong focus on automating tedious tasks and delivering work with high accuracy and attention to crucial project details.',
        icon_text: null,
        icon_type: 'text',
        border_color: 'sky-600',
        display_order: 0
    }
];

const projects = [
    {
        id: 12,
        title: 'Emotion Attendance System',
        subtitle: 'Group System Project',
        description: 'A complete PHP/MySQL application utilizing Computer Vision to log attendance based on facial emotion detection.',
        video_section_title: 'Video Demonstration',
        gallery_section_title: 'Project Gallery & System Views',
        deep_dive_content: `This system is our Group system Project, representing a full-stack solution built on PHP/MySQL, augmented with Computer Vision technology. It moves beyond simple clocking-in by analyzing facial expressions to determine and log the user's emotional state during attendance.\n\n\nGroup members:\n\nLouie Jay Ilustrisimo - Programmer/Developer\nMary Grace Ilosorio - Researcher 1\nAnne Marie Sulla -  Researcher 2 \nEdgar Espina - made some designs`,
        image_path: 'assets/images/projects/thumbnails/logo1_1765703648.png',
        status: 'completed',
        completion_percentage: 100,
        button_label: 'View Project →',
        button_action: 'https://emotionattendance.kesug.com/',
        highlights_section_title: 'Project Highlights',
        highlights: [
            {
                title: 'Core Technology: Emotion Logic',
                description: 'Real-time attendance session utilizing camera and computer vision logic, registering emotions like Happy, Sad, Neutral, etc.',
                image_url: 'assets/images/projects/12/highlights/attendance1_1765694912.png'
            },
            {
                title: 'Data Visualization: System Reports',
                description: 'Admins can generate detailed reports on attendance and emotional data for analysis and insights.',
                image_url: 'assets/images/projects/12/highlights/adminsystemreports_1765694912.png'
            }
        ],
        videos: [
            { video_title: 'System Codes', video_url: 'https://www.youtube.com/embed/Z4-VzCMo4S0' },
            { video_title: 'System', video_url: 'https://jumpshare.com/share/mSytFk1iYCnXH3BARZig' }
        ],
        gallery: {
            "Admin's View": [
                { image_url: 'assets/images/projects/12/gallery/17/addinstructor_1765694912.png' },
                { image_url: 'assets/images/projects/12/gallery/17/adminattendancesessions_1765694912.png' },
                { image_url: 'assets/images/projects/12/gallery/17/adminclasses_1765694912.png' },
                { image_url: 'assets/images/projects/12/gallery/17/adminhomedashboard_1765694912.png' },
                { image_url: 'assets/images/projects/12/gallery/17/adminlogin_1765694912.png' },
                { image_url: 'assets/images/projects/12/gallery/17/adminmanageinstructors_1765694912.png' },
                { image_url: 'assets/images/projects/12/gallery/17/adminsections_1765694912.png' },
                { image_url: 'assets/images/projects/12/gallery/17/adminsystemreports_1765694912.png' },
                { image_url: 'assets/images/projects/12/gallery/17/adminsystemreports1_1765694912.png' }
            ],
            "Instructor's View": [
                { image_url: 'assets/images/projects/12/gallery/18/instructordashboard_1765694912.png' },
                { image_url: 'assets/images/projects/12/gallery/18/instructordashboard1_1765694912.png' },
                { image_url: 'assets/images/projects/12/gallery/18/instructorlogin1_1765694912.png' },
                { image_url: 'assets/images/projects/12/gallery/18/instructormanageclass_1765694912.png' },
                { image_url: 'assets/images/projects/12/gallery/18/instructorsection_1765694912.png' },
                { image_url: 'assets/images/projects/12/gallery/18/instructorstudentlist_1765694912.png' }
            ],
            "Students Visual Interactions": [
                { image_url: 'assets/images/projects/12/gallery/19/attendance_1765694913.png' },
                { image_url: 'assets/images/projects/12/gallery/19/attendance1_1765694913.png' },
                { image_url: 'assets/images/projects/12/gallery/19/attendance2_1765694913.png' },
                { image_url: 'assets/images/projects/12/gallery/19/attendancesave1_1765694913.png' },
                { image_url: 'assets/images/projects/12/gallery/19/attendancesaved2_1765694913.png' }
            ]
        }
    },
    {
        id: 15,
        title: 'Kape de Isla',
        subtitle: 'Complete Coffee Shop E-Commerce & Delivery Platform',
        description: 'A full-stack web application designed for a premium coffee brand, featuring a seamless ordering system, real-time delivery tracking, and a mobile-responsive UI built with PHP and Tailwind CSS.',
        video_section_title: 'Video Demonstration',
        gallery_section_title: 'Project Gallery & System Views',
        deep_dive_content: `Kape de Isla is a passion project and personal brand centered on delivering a premium coffee experience. The heart of the venture is a proprietary online application that acts as both an ordering platform and a digital community hub. This app allows users to customize their beverages, schedule deliveries, participate in loyalty programs, and interact with the brand's local coffee stories. The service is hyper-focused, offering delivery across the whole municipality of Bantayan Island, ensuring every customer gets freshly brewed coffee regardless of their location. The project emphasizes logistics optimization to maintain beverage quality and utilizes the application to build a strong, personal connection with every customer.\n\nUnder the hood, the application is engineered for reliability and user engagement, featuring several key technical implementations:\n*   Interactive Product Discovery: A touch-optimized product carousel powered by Swiper.js, allowing customers to visually explore the menu with smooth, app-like transitions.\n*   Smart Cart System: A custom-built cart module that utilizes Local Storage for state persistence, ensuring users never lose their order progress even if they navigate away or refresh the page.\n*   Real-Time Order Tracking: An end-to-end tracking system that provides live status updates (from "Pending" to "Out for Delivery"), bridging the communication gap between the kitchen and the customer.\n*   Integrated Rider Logistics: A specialized dashboard for delivery riders to view assigned orders and update delivery statuses in real-time.\n*   Secure Authentication: Robust user management including secure login/registration and profile handling for address management and order history.\n*   Responsive Architecture: Built with Tailwind CSS following a mobile-first approach, ensuring a flawless experience on smartphones where 90% of orders originate.`,
        image_path: 'assets/images/projects/thumbnails/kape_de_isla_project_card_1771223443499_1771224202.png',
        status: 'completed',
        completion_percentage: 100,
        button_label: 'View Project →',
        button_action: 'https://kapedeisla.kesug.com/',
        highlights_section_title: 'Core System Modules',
        highlights: [
            {
                title: 'Real-Time Logistics & Tracking',
                description: 'The system features an advanced order tracking module that provides live status updates to customers. Integrated with a rider dashboard, it enables seamless communication between the kitchen, delivery personnel, and the end customer.',
                image_url: 'assets/images/projects/15/highlights/Screenshot_2026-02-16_130910_1771221347.png'
            },
            {
                title: 'Modern Mobile-First UI/UX',
                description: 'A powerful dashboard that serves as the mission control for the coffee shop. It provides administrators with visual sales analytics, real-time order monitoring, inventory management tools, and direct control over rider assignments—enabling data-driven decisions.',
                image_url: 'assets/images/projects/15/highlights/Screenshot_2026-02-16_131248_1771221347.png'
            }
        ],
        videos: [
            { video_title: 'Customer Ordering Flow', video_url: 'https://www.youtube.com/embed/9eHJYaayfhw' },
            { video_title: 'Rider & Admin Dashboard', video_url: 'https://www.youtube.com/embed/av0VIcWkGPQ' }
        ],
        gallery: {
            "Customer Interface": [
                { image_url: 'assets/images/projects/15/gallery/56/Screenshot_2026-02-16_130541_1771221347.png' },
                { image_url: 'assets/images/projects/15/gallery/56/Screenshot_2026-02-16_130606_1771221347.png' },
                { image_url: 'assets/images/projects/15/gallery/56/Screenshot_2026-02-16_130614_1771221347.png' },
                { image_url: 'assets/images/projects/15/gallery/56/Screenshot_2026-02-16_130744_1771221347.png' },
                { image_url: 'assets/images/projects/15/gallery/56/Screenshot_2026-02-16_131010_1771221347.png' },
                { image_url: 'assets/images/projects/15/gallery/56/Screenshot_2026-02-16_131017_1771221347.png' },
                { image_url: 'assets/images/projects/15/gallery/56/Screenshot_2026-02-16_131041_1771221347.png' }
            ],
            "Order Management": [
                { image_url: 'assets/images/projects/15/gallery/57/Screenshot_2026-02-16_130902_1771221347.png' },
                { image_url: 'assets/images/projects/15/gallery/57/Screenshot_2026-02-16_130925_1771221347.png' },
                { image_url: 'assets/images/projects/15/gallery/57/Screenshot_2026-02-16_131010_1771221347.png' },
                { image_url: 'assets/images/projects/15/gallery/57/Screenshot_2026-02-16_131017_1771221347.png' },
                { image_url: 'assets/images/projects/15/gallery/57/Screenshot_2026-02-16_131041_1771221347.png' }
            ],
            "Delivery System": [
                { image_url: 'assets/images/projects/15/gallery/58/Screenshot_2026-02-16_130910_1771221347.png' },
                { image_url: 'assets/images/projects/15/gallery/58/Screenshot_2026-02-16_131041_1771221347.png' },
                { image_url: 'assets/images/projects/15/gallery/58/Screenshot_2026-02-16_131248_1771221347.png' },
                { image_url: 'assets/images/projects/15/gallery/58/Screenshot_2026-02-16_132145_1771221347.png' },
                { image_url: 'assets/images/projects/15/gallery/58/Screenshot_2026-02-16_132204_1771221347.png' },
                { image_url: 'assets/images/projects/15/gallery/58/Screenshot_2026-02-16_132212_1771221347.png' },
                { image_url: 'assets/images/projects/15/gallery/58/Screenshot_2026-02-16_132234_1771221347.png' },
                { image_url: 'assets/images/projects/15/gallery/58/Screenshot_2026-02-16_132246_1771221347.png' },
                { image_url: 'assets/images/projects/15/gallery/58/Screenshot_2026-02-16_132255_1771221347.png' },
                { image_url: 'assets/images/projects/15/gallery/58/Screenshot_2026-02-16_132658_1771221347.png' }
            ]
        }
    },
    {
        id: 13,
        title: 'Bantayan Smart Application',
        subtitle: 'Self Made Mobile App using PHP',
        description: 'Focusing on integrating emergency response, local business directories, tourist spots data, and application with island feeds',
        video_section_title: 'Video Demonstration',
        gallery_section_title: 'Project Gallery & System Views',
        deep_dive_content: 'A smart application tailored to the needs of Bantayan Island, including accident reporting for emergencies, tourist spot information, available resorts, and more. most highlight feature the island feeds where the all users can interact',
        image_path: 'assets/images/projects/thumbnails/bantayan_1765799067.png',
        status: 'in-progress',
        completion_percentage: 67,
        button_label: 'View Project',
        button_action: '',
        highlights_section_title: 'Core Technology',
        highlights: [
            {
                title: 'Cool Glassmorphism login Design',
                description: '',
                image_url: 'assets/images/projects/13/highlights/login_1765799891.jpg'
            },
            {
                title: 'Cool Feeds Users Interactions',
                description: 'Cool',
                image_url: 'assets/images/projects/13/highlights/reactions_1765799891.jpg'
            }
        ],
        videos: [],
        gallery: {
            "login and register page": [
                { image_url: 'assets/images/projects/13/gallery/38/login_1765799891.jpg' },
                { image_url: 'assets/images/projects/13/gallery/38/register_1765799891.jpg' }
            ],
            "Feeds": [
                { image_url: 'assets/images/projects/13/gallery/39/commentsreply_1765799891.jpg' },
                { image_url: 'assets/images/projects/13/gallery/39/Feeds_1765799891.jpg' },
                { image_url: 'assets/images/projects/13/gallery/39/feeds1_1765799891.jpg' },
                { image_url: 'assets/images/projects/13/gallery/39/possdetails_1765799891.jpg' },
                { image_url: 'assets/images/projects/13/gallery/39/post_1765799891.jpg' },
                { image_url: 'assets/images/projects/13/gallery/39/postmenu_1765799891.jpg' },
                { image_url: 'assets/images/projects/13/gallery/39/postprofile_1765799891.jpg' },
                { image_url: 'assets/images/projects/13/gallery/39/reactions_1765799891.jpg' },
                { image_url: 'assets/images/projects/13/gallery/39/stalk_profile_1765799891.jpg' }
            ],
            "Other Interactions": [
                { image_url: 'assets/images/projects/13/gallery/40/events_1765799891.jpg' },
                { image_url: 'assets/images/projects/13/gallery/40/index_1765799891.jpg' },
                { image_url: 'assets/images/projects/13/gallery/40/index1_1765799891.jpg' },
                { image_url: 'assets/images/projects/13/gallery/40/index2_1765799891.jpg' },
                { image_url: 'assets/images/projects/13/gallery/40/tourspts_1765799891.jpg' },
                { image_url: 'assets/images/projects/13/gallery/40/tourspts1_1765799891.jpg' }
            ]
        }
    },
    {
        id: 14,
        title: 'Facial Recognition',
        subtitle: 'Own Idea For Future Clients Work',
        description: 'Targeting improved accuracy and deployment methods for institutional use.',
        video_section_title: 'Video Demonstration',
        gallery_section_title: 'Project Gallery & System Views',
        deep_dive_content: 'Developing a more advanced, dedicated facial recognition system for high-security attendance logging.',
        image_path: 'assets/images/projects/thumbnails/facialrecognition_1765795716.png',
        status: 'planned',
        completion_percentage: 100,
        button_label: 'View Project →',
        button_action: '',
        highlights_section_title: 'Core Technology',
        highlights: [],
        videos: [],
        gallery: {}
    },
    {
        id: 16,
        title: "Banyan's Native Chickens",
        subtitle: 'Specialty Cull White Leghorn Poultry E-Commerce',
        description: 'A specialized online meat shop providing high-quality culled White Leghorn chickens (for superior flavor), featuring a dedicated e-commerce platform for seamless online ordering and delivery.',
        video_section_title: 'Video Demonstration',
        gallery_section_title: 'Project Gallery & System Views',
        deep_dive_content: `Banyan's Native Chickens is a hyper-focused food commerce project dedicated to supplying the market with premium culled White Leghorn chickens. These birds are highly sought after for their rich, distinct flavor, making them ideal for traditional Filipino dishes. The core of this venture is a proprietary online ordering system that digitizes the traditional market experience. Customers (including restaurants, bulk buyers, and households) can check real-time inventory, select specific cuts, schedule deliveries, and manage recurring orders. The project emphasizes a rigorous, hygienic cold-chain process from sourcing to delivery, ensuring product freshness. By focusing on a niche product and optimizing the logistics through a user-friendly application, Banyan's Native Chickens establishes itself as the reliable, modern source for this specialty poultry.`,
        image_path: 'assets/images/projects/thumbnails/banyans_1765809387.jpg',
        status: 'planned',
        completion_percentage: 12,
        button_label: 'View Project →',
        button_action: '',
        highlights_section_title: 'Core Technology',
        highlights: [],
        videos: [],
        gallery: {}
    },
    {
        id: 17,
        title: "Banyan's Habil",
        subtitle: 'The Hyper-Local Ride-Hailing App for Bantayan Island',
        description: 'A specialized, on-demand mobile application for booking safe, verified habal-habal (motorcycle taxi) rides, exclusively serving the entirety of Bantayan Island, Cebu.',
        video_section_title: 'Video Demonstration',
        gallery_section_title: 'Project Gallery & System Views',
        deep_dive_content: `Banyan's Habil is a dedicated ride-hailing solution built from the ground up to serve the unique transportation needs of Bantayan Island. The name evokes local familiarity and trust. The platform provides real-time GPS tracking, standardized, transparent pricing, and rigorous driver verification to ensure passenger safety. By focusing solely on this island, Banyan's Habil guarantees efficiency, significantly reducing wait times and optimizing routes tailored for the local road network. The app also features a multi-lingual interface and supports various payment methods, aiming to be the most reliable and convenient transport option for both residents and island visitors.`,
        image_path: 'assets/images/projects/thumbnails/habil1_1765809607.jpg',
        status: 'planned',
        completion_percentage: 13,
        button_label: 'View Project →',
        button_action: '',
        highlights_section_title: 'Core Technology',
        highlights: [],
        videos: [],
        gallery: {}
    }
];

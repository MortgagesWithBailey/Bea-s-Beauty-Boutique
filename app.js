const servicesData = [
    {
        category: "Lash Extensions",
        icon: "fa-eye",
        overlays: ["lashes"],
        tips: [
            "Extensions are attached to individual natural lashes.",
            "Natural lashes shed every day as part of their growth cycle.",
            "Lash fills maintain a fuller look.",
            "Clean lashes improve retention.",
            "Oil-based products can affect adhesive.",
            "Sleeping face-down can shorten lash life.",
            "Lash extensions eliminate the need for mascara for many people.",
            "Different curl styles create different looks.",
            "Humidity can affect adhesive performance.",
            "Professional application protects natural lashes.",
            "Rubbing your eyes can damage extensions.",
            "Lash shampoos help keep extensions clean.",
            "Extension weight should match your natural lashes.",
            "Proper aftercare extends wear time.",
            "Healthy natural lashes create the best foundation."
        ],
        items: [
            { name: "Touch of colour", price: 15, description: "Add a subtle pop of color to your lash set for a unique, customized look." },
            { name: "Removal", price: 20, description: "Safe and gentle removal of eyelash extensions to protect your natural lashes." },
            { name: "Classic lash extension fill", price: 55, description: "Maintain your classic lash extensions by replacing outgrown or shed lashes." },
            { name: "Hybrid lash extension fill", price: 60, description: "Maintain your hybrid set, blending classic and volume lashes for a textured look." },
            { name: "Volume lash extension fill", price: 60, description: "Keep your volume set looking full and fluffy by replacing outgrown fans." },
            { name: "Wet volume lash extension fill", price: 70, description: "Maintain your wet volume set to keep that glossy, spiked appearance." },
            { name: "Mega volume lash extension fill", price: 75, description: "Maintain your mega volume set by replacing outgrown ultra-fine fans." },
            { name: "Classic lash extension", price: 130, description: "One extension is applied to one natural lash for a beautiful, natural enhancement." },
            { name: "Hybrid lash extension", price: 140, description: "A perfect blend of classic and volume techniques for a textured, wispy appearance." },
            { name: "Volume lash extensions", price: 150, description: "Multiple lightweight extensions are applied to a single natural lash for a fluffy, voluminous look." },
            { name: "Wet volume lash extension", price: 150, description: "Wet lashes give the appearance of defined, spiky lashes that look glossy and \"wet.\"" },
            { name: "Mega volume lash extension", price: 160, description: "The ultimate dramatic look using ultra-fine lashes to create incredibly full, dense fans." }
        ]
    },
    {
        category: "Manicure",
        icon: "fa-hand-sparkles",
        overlays: ["nails"],
        tips: [
            "Nails grow about 3 mm each month.",
            "Cuticles protect against bacteria.",
            "Gel polish lasts longer because it's cured under UV/LED light.",
            "Base coats protect natural nails.",
            "Filing one direction reduces splitting.",
            "Hand cream improves nail health.",
            "Nails can reveal signs of overall health.",
            "Picking polish weakens nails.",
            "Gloves protect manicures.",
            "Biotin may support nail strength.",
            "Over-buffing thins nails.",
            "Proper sanitation prevents infections.",
            "Top coats reduce chipping.",
            "Cuticle oil improves flexibility.",
            "Regular manicures help maintain healthier nails."
        ],
        items: [
            { name: "Nail replacement", price: 10, description: "Repair or replace a single broken or damaged nail." },
            { name: "Gel polish removal", price: 10, description: "Gentle removal of gel polish to prevent damage to the natural nail." },
            { name: "Kids manicure", price: 20, description: "A gentle, fun manicure designed specifically for delicate little hands." },
            { name: "Acrylic or builder gel removal", price: 25, description: "Safe, professional removal of artificial nail enhancements." },
            { name: "Classic manicure", price: 45, description: "Traditional nail care including shaping, cuticle care, and regular polish." },
            { name: "Acrylic manicure fill", price: 50, description: "Routine maintenance to fill the growth gap of your acrylic nails." },
            { name: "Builder gel manicure fill", price: 50, description: "Maintenance for your builder gel manicure to fill in new nail growth." },
            { name: "Gel polish manicure", price: 50, description: "A long-lasting, chip-resistant manicure using premium gel polish." },
            { name: "Acrylic overlay manicure", price: 60, description: "A strong acrylic coating applied directly over your natural nails for protection." },
            { name: "Builder gel overlay manicure solid colour", price: 60, description: "A protective layer of builder gel applied over natural nails with a solid color finish." },
            { name: "Builder gel manicure with extensions fill", price: 60, description: "Maintenance fill for your builder gel extensions." },
            { name: "Acrylic manicure with extensions", price: 70, description: "Classic acrylic extensions for dramatic length and incredible durability." },
            { name: "Builder gel extension", price: 75, description: "Durable nail extensions sculpted with builder gel for added length and strength." },
            { name: "Gel x manicure", price: 85, description: "Full-coverage soft gel extensions for a flawless, natural-looking length." },
            { name: "Classic mani + pedi combo", price: 95, description: "The ultimate traditional care package for both your hands and feet." },
            { name: "Gel polish mani + pedi combo", price: 100, description: "Long-lasting gel polish applied to both fingers and toes." },
            { name: "Builder gel mani + pedi", price: 120, description: "Premium builder gel treatment for hands paired with a relaxing pedicure." }
        ]
    },
    {
        category: "Pedicure",
        icon: "fa-shoe-prints",
        overlays: ["nails"],
        tips: [
            "Feet contain 26 bones each.",
            "Moisturizing helps prevent cracked heels.",
            "Toenails should be cut straight across.",
            "Calluses protect your feet but can become excessive.",
            "Pedicures improve foot hygiene.",
            "Foot massage supports circulation.",
            "Proper shoe fit protects nail health.",
            "Fungus thrives in damp environments.",
            "Exfoliation keeps feet smoother.",
            "Feet support your entire body weight.",
            "Healthy toenails grow slowly.",
            "Public showers can increase fungal exposure.",
            "Clean socks help prevent odor.",
            "Drying between toes helps prevent infection.",
            "Regular foot care improves comfort and mobility."
        ],
        items: [
            { name: "Gel polish removal", price: 10, description: "Gentle soaking and removal of gel polish from the toes." },
            { name: "Acrylic or builder gel removal", price: 25, description: "Safe and professional removal of enhancements on the toes." },
            { name: "Gel polish pedicure", price: 65, description: "A relaxing pedicure finished with a durable, high-gloss gel polish." },
            { name: "Builder gel fill", price: 65, description: "Maintenance for your toe builder gel to cover new growth." },
            { name: "Builder gel overlay pedicure", price: 70, description: "A durable builder gel layer applied to toes for a flawless, long-lasting finish." },
            { name: "Classic mani + pedi combo", price: 95, description: "Traditional nail care for both hands and feet, perfect for regular maintenance." },
            { name: "Gel polish mani + pedi combo", price: 100, description: "Chip-resistant gel color for a perfect, long-lasting finish on hands and feet." },
            { name: "Builder gel or acrylic mani + pedi combo", price: 120, description: "The ultimate durable enhancement package for your hands and feet." }
        ]
    },
    {
        category: "Waxing",
        icon: "fa-leaf",
        overlays: ["wax"],
        tips: [
            "Hair grows in three different cycles.",
            "Waxing removes hair from the root.",
            "Regular waxing can make hair feel finer over time.",
            "Exfoliation helps prevent ingrown hairs.",
            "Waxing also removes dead skin cells.",
            "Hair should be about ¼ inch long for best results.",
            "Heat should be avoided after waxing.",
            "Sensitive skin is normal after a wax.",
            "Different waxes are used for different body areas.",
            "Hydrated skin responds better to waxing.",
            "Shaving between waxes affects results.",
            "Waxing can last 3–6 weeks.",
            "Sunscreen is important after facial waxing.",
            "Ingrown hairs can often be prevented with proper aftercare.",
            "Professional waxing reduces the risk of skin damage."
        ],
        items: [
            { name: "Upper lip wax", price: 12, description: "Quick and gentle hair removal for the upper lip area." },
            { name: "Chin wax", price: 12, description: "Gentle hair removal targeting the chin area." },
            { name: "Side of face wax", price: 15, description: "Gentle hair removal for the sides of the face." },
            { name: "Brow wax", price: 20, description: "Expert shaping and clean-up of the eyebrows." },
            { name: "Underarm wax", price: 22, description: "Keep your underarms smooth and hair-free for weeks." },
            { name: "Half arm wax", price: 25, description: "Hair removal for either the upper or lower half of your arms." },
            { name: "Half leg wax", price: 30, description: "Smooth hair removal for either the upper or lower half of your legs." },
            { name: "Full arm wax", price: 35, description: "Smooth hair removal from the shoulders down to the wrists." },
            { name: "Brow tint and wax combo", price: 38, description: "Shape and define your brows with professional waxing and semi-permanent tinting." },
            { name: "Bikini wax", price: 45, description: "Hair removal along the bikini line for a clean, smooth appearance." },
            { name: "Full face wax", price: 45, description: "Comprehensive hair removal for the entire face, leaving skin incredibly smooth." },
            { name: "Full leg wax", price: 65, description: "Complete hair removal from the thighs down to the ankles." },
            { name: "Brazilian wax", price: 80, description: "Complete hair removal from the front, back, and everything in between." }
        ]
    },
    {
        category: "Hair Tinsel",
        icon: "fa-wand-magic-sparkles",
        overlays: ["tinsel"],
        tips: [
            "Hair tinsel is attached to individual strands of hair.",
            "It comes in many colors and finishes.",
            "Hair tinsel is lightweight.",
            "Most tinsel is heat resistant.",
            "Proper application protects natural hair.",
            "Gentle brushing extends its life.",
            "Silk pillowcases reduce tangling.",
            "Hair tinsel works on most hair types.",
            "It can last several weeks with proper care.",
            "Tight hairstyles may loosen tinsel faster.",
            "Hair grows naturally while wearing tinsel.",
            "Professional installation lasts longer.",
            "Tinsel can add shine without coloring hair.",
            "Avoid excessive pulling.",
            "Regular maintenance keeps it looking its best."
        ],
        items: [
            { name: "Strands (2 for $5)", price: 5, description: "2 sparkling, heat-resistant tinsel strands tied into your natural hair for a magical shimmer." },
            { name: "Clusters (2 for $10)", price: 10, description: "2 thicker clusters of dazzling tinsel for a more dramatic, eye-catching sparkle." },
            { name: "Strands (10 for $20)", price: 20, description: "10 sparkling, heat-resistant tinsel strands tied into your natural hair for a magical shimmer." },
            { name: "Strands (20 for $35)", price: 35, description: "20 sparkling, heat-resistant tinsel strands tied into your natural hair for a magical shimmer." },
            { name: "Clusters (10 for $40)", price: 40, description: "10 thicker clusters of dazzling tinsel for a more dramatic, eye-catching sparkle." },
            { name: "Strands (40 for $65)", price: 65, description: "40 sparkling, heat-resistant tinsel strands tied into your natural hair for a magical shimmer." },
            { name: "Clusters (20 for $70)", price: 70, description: "20 thicker clusters of dazzling tinsel for a more dramatic, eye-catching sparkle." },
            { name: "Strands (60 for $90)", price: 90, description: "60 sparkling, heat-resistant tinsel strands tied into your natural hair for a magical shimmer." },
            { name: "Strands (80 for $120)", price: 120, description: "80 sparkling, heat-resistant tinsel strands tied into your natural hair for a magical shimmer." },
            { name: "Clusters (40 for $130)", price: 130, description: "40 thicker clusters of dazzling tinsel for a more dramatic, eye-catching sparkle." },
            { name: "Clusters (60 for $180)", price: 180, description: "60 thicker clusters of dazzling tinsel for a more dramatic, eye-catching sparkle." },
            { name: "Clusters (80 for $250)", price: 250, description: "80 thicker clusters of dazzling tinsel for a more dramatic, eye-catching sparkle." }
        ]
    },
    {
        category: "Massages",
        icon: "fa-spa",
        overlays: ["massage"],
        tips: [
            "Massage helps relax tight muscles.",
            "Relaxation massage differs from deep tissue massage.",
            "Massage can encourage better circulation.",
            "Stress often causes muscle tension.",
            "Deep breathing enhances relaxation.",
            "Drinking water afterward is recommended.",
            "Massage may improve sleep quality.",
            "Warm muscles respond better to massage.",
            "Massage can reduce feelings of stress.",
            "Essential oils may enhance relaxation for some people.",
            "Good posture reduces muscle strain.",
            "Regular massage can support overall wellness.",
            "Communication helps tailor pressure to your comfort.",
            "Quiet environments enhance relaxation.",
            "Self-care contributes to overall well-being."
        ],
        items: [
            { name: "Relaxation massage (30 minute)", price: 45, description: "A quick, calming 30-minute Swedish-style massage designed to relieve tension." },
            { name: "Relaxation massage (60 minute)", price: 90, description: "A full-hour calming Swedish-style massage designed to promote deep relaxation." },
            { name: "Relaxation massage (90 minute)", price: 135, description: "An extended 90-minute full-body Swedish-style massage for ultimate stress relief." },
            { name: "Luxury massage and facial escape", price: 150, description: "The ultimate relaxation experience combining a soothing massage with a rejuvenating facial." },
            { name: "Relaxation massage (120 minute)", price: 180, description: "A luxurious 2-hour full-body massage offering maximum relaxation and tension release." }
        ]
    },
    {
        category: "Facials",
        icon: "fa-face-smile",
        overlays: ["facial"],
        tips: [
            "Skin naturally renews itself about every month.",
            "Cleansing removes dirt, oil, and pollutants.",
            "Hydration improves skin appearance.",
            "SPF is important after most facials.",
            "Over-exfoliation can damage the skin barrier.",
            "Every skin type has different needs.",
            "Professional extractions should be done carefully.",
            "Stress can affect skin health.",
            "Facial massage may improve circulation.",
            "Healthy skin begins with consistent care.",
            "Water supports skin hydration.",
            "Sleep affects skin repair.",
            "Vitamin C helps brighten skin.",
            "Moisturizer strengthens the skin barrier.",
            "Consistent facials support long-term skin health."
        ],
        items: [
            { name: "Express facial", price: 75, description: "A quick, refreshing facial perfect for a midday glow-up or when you're short on time." },
            { name: "Customized facial", price: 110, description: "A tailored skincare treatment designed specifically for your unique skin type and concerns." },
            { name: "Luxury massage and facial escape", price: 150, description: "A premium combination of our customized facial and a deeply relaxing massage." }
        ]
    },
    {
        category: "Lash Lifting & Tinting",
        icon: "fa-eye",
        overlays: ["lift"],
        tips: [
            "A lash lift enhances your natural lashes.",
            "A tint darkens lighter lashes for added definition.",
            "Results typically last several weeks.",
            "Keeping lashes dry for the first 24 hours helps the lift set.",
            "A lash lift reduces the need for a curler.",
            "Professional solutions are formulated for the eye area.",
            "Natural lash growth affects how long results last.",
            "Most people can wear mascara after the initial aftercare period.",
            "Lash lifts are low maintenance.",
            "Proper aftercare helps extend results.",
            "A patch test may be recommended before tinting.",
            "Not everyone is a suitable candidate for a lash lift.",
            "A lift creates the appearance of longer lashes.",
            "Professional application helps ensure even results.",
            "Regular maintenance keeps lashes looking their best."
        ],
        items: [
            { name: "Brow tinting", price: 22, description: "Enhances and defines your eyebrows with a semi-permanent color." },
            { name: "Lash tinting", price: 28, description: "Darkens your natural lashes for a mascara-like effect without the makeup." },
            { name: "Lash lift", price: 65, description: "A semi-permanent treatment that gives your natural lashes a beautiful upward curl." },
            { name: "Brow tint and wax combo", price: 38, description: "Perfectly shaped and tinted brows to frame your face." },
            { name: "Lash lift and tint combo", price: 80, description: "The ultimate natural lash enhancement, combining a lifting curl with a darkening tint." }
        ]
    }
];

let cart = [];
// Currently rendered preview items, keyed by category name
let renderedPreviewKeys = [];

function initSplashIntro() {
    const splash = document.getElementById('splash-screen');
    if (!splash) return;

    window.setTimeout(() => {
        splash.classList.add('splash-hidden');
        document.body.classList.remove('splash-active');
    }, 3100);
}

// Category → service preview icon map
const categoryIconMap = {
    'Lash Extensions': 'lashExtensions',
    'Manicure': 'manicure',
    'Pedicure': 'pedicure',
    'Waxing': 'waxing',
    'Hair Tinsel': 'tinsel',
    'Massages': 'massage',
    'Facials': 'facial',
    'Lash Lifting & Tinting': 'lashLift'
};

// Minimalist luxury-spa line-art illustrations for the Service Preview Panel.
// All strokes use currentColor so they inherit the panel's brand purple via CSS.
const serviceIcons = {
    manicure: {
        label: 'Manicure',
        svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="41" y="84" width="18" height="13" rx="4" stroke="currentColor" stroke-width="1.6"/>
            <path d="M29 86 C27 74 28 62 34 55 C41 47 59 47 66 55 C72 62 73 74 71 86 Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
            <rect x="31" y="34" width="7.5" height="25" rx="3.75" stroke="currentColor" stroke-width="1.6"/>
            <ellipse cx="34.75" cy="37.5" rx="3" ry="2.1" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
            <rect x="41" y="21" width="8.5" height="38" rx="4.25" stroke="currentColor" stroke-width="1.6"/>
            <ellipse cx="45.25" cy="25" rx="3.2" ry="2.2" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
            <rect x="51.5" y="15" width="9" height="44" rx="4.5" stroke="currentColor" stroke-width="1.6"/>
            <ellipse cx="56" cy="19" rx="3.4" ry="2.3" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
            <rect x="62.5" y="21" width="8.5" height="38" rx="4.25" stroke="currentColor" stroke-width="1.6"/>
            <ellipse cx="66.75" cy="25" rx="3.2" ry="2.2" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
            <g transform="rotate(-42 26 68)">
                <rect x="21" y="52" width="8.5" height="26" rx="4.25" stroke="currentColor" stroke-width="1.6"/>
                <ellipse cx="25.25" cy="55.5" rx="3.1" ry="2.2" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
            </g>
        </svg>`
    },
    pedicure: {
        label: 'Pedicure',
        svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42 92 L60 92 C67 92 71 87 71 79 L71 50 C71 41 67 35 60 35 L34 35 C27 35 23 41 23 50 L23 79 C23 87 27 92 34 92 Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
            <rect x="24" y="13" width="12" height="23" rx="6" stroke="currentColor" stroke-width="1.6"/>
            <ellipse cx="30" cy="18" rx="3.4" ry="2.3" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
            <rect x="37" y="12" width="9" height="24" rx="4.5" stroke="currentColor" stroke-width="1.6"/>
            <ellipse cx="41.5" cy="17" rx="2.9" ry="2" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
            <rect x="47" y="16" width="8" height="20" rx="4" stroke="currentColor" stroke-width="1.6"/>
            <ellipse cx="51" cy="20.5" rx="2.6" ry="1.9" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
            <rect x="56" y="19" width="7.5" height="17" rx="3.75" stroke="currentColor" stroke-width="1.6"/>
            <ellipse cx="59.75" cy="23" rx="2.3" ry="1.7" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
            <rect x="64" y="22" width="6.5" height="14" rx="3.25" stroke="currentColor" stroke-width="1.6"/>
            <ellipse cx="67.25" cy="25.5" rx="2" ry="1.5" fill="var(--accent)" stroke="currentColor" stroke-width="1"/>
        </svg>`
    },
    tinsel: {
        label: 'Hair Tinsel',
        svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 14 C24 20 22 30 26 40 C29 48 27 56 22 64 C18 71 18 80 24 88" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            <path d="M42 12 C37 20 36 30 40 39 C44 48 43 57 38 66 C34 73 35 81 41 89" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            <path d="M55 12 C51 21 51 31 56 39 C61 47 61 56 56 65 C52 72 53 80 59 88" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            <path d="M67 15 C64 23 65 32 70 40 C75 47 75 55 70 63 C67 69 68 77 73 84" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            <path d="M22 27 L28 24 L26 31 L32 29" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M46 22 L50 18 L52 24 L57 21" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <g stroke="currentColor" stroke-width="1.1" stroke-linecap="round">
                <path d="M62 48 l3.2 3.2 M65.2 48 l-3.2 3.2 M63.6 46.4 v6.4"/>
            </g>
            <g stroke="currentColor" stroke-width="1.1" stroke-linecap="round">
                <path d="M30 58 l3.2 3.2 M33.2 58 l-3.2 3.2 M31.6 56.4 v6.4"/>
            </g>
            <circle cx="45" cy="52" r="1.6" fill="currentColor"/>
            <circle cx="72" cy="30" r="1.6" fill="currentColor"/>
        </svg>`
    },
    waxing: {
        label: 'Waxing',
        svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42 10 C35 10 30 16 30 24 L31 55 C31 63 29 70 25 76 C21 82 21 90 26 96" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M30 24 C30 16 40 12 46 16 C51 19 51 26 48 30 L44 55 C43 62 45 69 49 75" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <g transform="rotate(-18 68 48)">
                <rect x="52" y="40" width="34" height="14" rx="2.5" stroke="currentColor" stroke-width="1.5"/>
                <line x1="58" y1="40" x2="58" y2="54" stroke="currentColor" stroke-width="1"/>
                <line x1="65" y1="40" x2="65" y2="54" stroke="currentColor" stroke-width="1"/>
                <line x1="72" y1="40" x2="72" y2="54" stroke="currentColor" stroke-width="1"/>
                <line x1="79" y1="40" x2="79" y2="54" stroke="currentColor" stroke-width="1"/>
            </g>
            <path d="M78 30 L82 22 M83 32 L89 26 M80 37 L88 35" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
        </svg>`
    },
    lashExtensions: {
        label: 'Lash Extensions',
        svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 52 C24 34 40 26 50 26 C60 26 76 34 88 52 C76 68 60 76 50 76 C40 76 24 68 12 52 Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="50" cy="52" r="11" stroke="currentColor" stroke-width="1.6"/>
            <circle cx="50" cy="52" r="4" fill="currentColor"/>
            <g stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
                <path d="M24 38 C21 30 20 24 21 17"/>
                <path d="M33 31 C31 23 31 17 33 10"/>
                <path d="M44 27 C43 19 44 13 47 7"/>
                <path d="M56 27 C57 19 56 13 53 7"/>
                <path d="M67 31 C69 23 69 17 67 10"/>
                <path d="M76 38 C79 30 80 24 79 17"/>
            </g>
        </svg>`
    },
    lashLift: {
        label: 'Lash Lift & Tint',
        svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 54 C26 40 40 34 50 34 C60 34 74 40 86 54 C74 66 60 72 50 72 C40 72 26 66 14 54 Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="50" cy="54" r="10" stroke="currentColor" stroke-width="1.6"/>
            <circle cx="50" cy="54" r="3.6" fill="currentColor"/>
            <g stroke="currentColor" stroke-width="1.4" stroke-linecap="round" fill="none">
                <path d="M28 38 C29 32 33 28 38 27"/>
                <path d="M39 33 C41 27 45 24 50 23"/>
                <path d="M51 23 C56 24 60 27 62 33"/>
                <path d="M63 27 C68 28 72 32 73 38"/>
            </g>
        </svg>`
    },
    facial: {
        label: 'Facial',
        svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 12 C34 12 26 24 26 40 C26 58 36 74 50 74 C64 74 74 58 74 40 C74 24 66 12 50 12 Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M31 15 C36 8 44 5 50 5 C56 5 64 8 69 15 C62 13 56 12 50 12 C44 12 38 13 31 15 Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M32 42 C36 46 41 47 45 44" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            <path d="M55 44 C59 47 64 46 68 42" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            <path d="M42 58 C45 61 55 61 58 58" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            <g stroke="currentColor" stroke-width="1.1" stroke-linecap="round">
                <path d="M20 30 q4 3 0 6 q-4 3 0 6"/>
                <path d="M80 30 q-4 3 0 6 q4 3 0 6"/>
            </g>
        </svg>`
    },
    massage: {
        label: 'Relaxation Massage',
        svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 78 L90 78" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            <path d="M18 78 L18 84 M82 78 L82 84" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            <path d="M22 68 C22 63 26 60 31 60 L70 60 C76 60 80 64 78 69 L76 70 L24 70 Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="18" cy="55" r="8" stroke="currentColor" stroke-width="1.6"/>
            <ellipse cx="42" cy="64" rx="4.5" ry="3" fill="none" stroke="currentColor" stroke-width="1.1"/>
            <ellipse cx="54" cy="64" rx="4.5" ry="3" fill="none" stroke="currentColor" stroke-width="1.1"/>
            <ellipse cx="66" cy="64" rx="4.5" ry="3" fill="none" stroke="currentColor" stroke-width="1.1"/>
            <path d="M30 22 C34 16 40 16 42 22 C44 27 40 30 36 30" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" fill="none"/>
            <path d="M50 18 C54 12 60 12 62 18 C64 23 60 26 56 26" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" fill="none"/>
            <path d="M68 26 C72 20 78 20 80 26 C82 31 78 34 74 34" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" fill="none"/>
        </svg>`
    }
};

function renderPreviewPanel() {
    const stack = document.getElementById('preview-stack');
    const emptyState = document.getElementById('preview-empty');
    if (!stack) return;

    // Which categories are currently represented in the cart, in first-added order,
    // each mapped to a count of how many items from that category are in the cart.
    const counts = {};
    const order = [];
    cart.forEach(item => {
        const key = categoryIconMap[item.category];
        if (!key) return;
        if (!(key in counts)) order.push(key);
        counts[key] = (counts[key] || 0) + 1;
    });

    emptyState.style.display = order.length === 0 ? '' : 'none';

    // Remove items that are no longer active, with a fade/slide-out.
    renderedPreviewKeys.filter(key => !(key in counts)).forEach(key => {
        const el = stack.querySelector(`[data-key="${key}"]`);
        if (!el) return;
        el.classList.remove('enter-active');
        el.classList.add('leave-active');
        el.addEventListener('transitionend', () => el.remove(), { once: true });
        // Fallback removal in case transitionend doesn't fire
        setTimeout(() => { if (el.isConnected) el.remove(); }, 500);
    });

    // Add newly active items, animating in with a soft fade + upward motion.
    order.filter(key => !renderedPreviewKeys.includes(key)).forEach(key => {
        const icon = serviceIcons[key];
        if (!icon) return;
        const item = document.createElement('div');
        item.className = 'preview-item';
        item.setAttribute('data-key', key);
        item.innerHTML = `
            <div class="preview-item-icon">${icon.svg}</div>
            <div class="preview-item-label">${icon.label}<span class="preview-item-count" data-count-for="${key}"></span></div>
        `;
        stack.appendChild(item);
        // Force layout then trigger the enter transition
        requestAnimationFrame(() => requestAnimationFrame(() => item.classList.add('enter-active')));
    });

    // Update quantity labels on items that remain (or were just added).
    order.forEach(key => {
        const countEl = stack.querySelector(`[data-count-for="${key}"]`);
        if (countEl) {
            countEl.textContent = counts[key] > 1 ? ` · ${counts[key]} services` : '';
        }
    });

    renderedPreviewKeys = order;
}

document.addEventListener('DOMContentLoaded', () => {
    initSplashIntro();
    initMobileNav();
    initReviewForm();
    initReviewsToggle();

    const servicesContainer = document.getElementById('services-container');
    const cartIcon = document.getElementById('cart-icon');
    const closeCartBtn = document.getElementById('close-cart');
    const bookBtn = document.getElementById('book-btn');
    const closeModalBtn = document.getElementById('close-modal');

    // Generate Accordions (items already sorted low→high in data)
    servicesData.forEach((category, index) => {
        const accordion = document.createElement('div');
        accordion.className = 'accordion';

        // Sort items low to high
        const sorted = [...category.items].sort((a, b) => a.price - b.price);

        let itemsHTML = sorted.map(item => `
            <div class="service-item">
                <div class="service-info">
                    <div class="service-name">${item.name}</div>
                    <div class="service-desc" style="font-size:0.85rem;color:var(--text-muted);margin-top:5px;">${item.description}</div>
                </div>
                <div class="service-price">$${item.price}</div>
                <button class="add-to-cart-btn" onclick="addToCart('${item.name.replace(/'/g, "\\'")}', ${item.price}, '${category.category}')">
                    <i class="fa-solid fa-plus"></i> Add
                </button>
            </div>
        `).join('');

        accordion.innerHTML = `
            <div class="accordion-header" onclick="toggleAccordion(${index})">
                <h3><i class="fa-solid ${category.icon}" style="margin-right:10px;color:var(--primary);"></i>${category.category}</h3>
                <i class="fa-solid fa-chevron-down accordion-icon"></i>
            </div>
            <div class="accordion-content" id="content-${index}">
                ${category.tips && category.tips.length ? `
                <div class="service-tips">
                    <div class="tips-header"><i class="fa-solid fa-lightbulb"></i> Did You Know?</div>
                    <div class="tips-slide" id="tips-slide-${index}">${category.tips[0]}</div>
                    <div class="tips-progress-track">
                        <div class="tips-progress-bar" id="tips-bar-${index}"></div>
                    </div>
                </div>` : ''}
                <div class="services-list">${itemsHTML}</div>
            </div>
        `;
        servicesContainer.appendChild(accordion);
    });

    // Start the auto-advancing tip slideshows
    initTipsSlideshows();

    // Cart Events
    cartIcon.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    document.getElementById('cart-overlay').addEventListener('click', closeCart);

    // Modal Events
    bookBtn.addEventListener('click', () => { closeCart(); openModal(); });
    closeModalBtn.addEventListener('click', closeModal);
    document.getElementById('booking-modal-overlay').addEventListener('click', closeModal);
});

function toggleAccordion(index) {
    const accordions = document.querySelectorAll('.accordion');
    const content = document.getElementById(`content-${index}`);
    const accordion = accordions[index];
    accordion.classList.toggle('active');
    content.style.maxHeight = accordion.classList.contains('active') ? content.scrollHeight + "px" : null;
}

function initMobileNav() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('mobile-menu');
    if (!toggle || !menu) return;

    const closeMenu = () => {
        menu.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    };

    const openMenu = () => {
        menu.classList.add('active');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    };

    toggle.addEventListener('click', () => {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close the menu after tapping any link inside it
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // If the window is resized back to desktop width, make sure the
    // mobile menu isn't left open underneath the regular nav links.
    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) closeMenu();
    });
}

function initReviewsToggle() {
    const btn = document.getElementById('reviews-toggle-btn');
    const panel = document.getElementById('reviews-more');
    if (!btn || !panel) return;

    btn.addEventListener('click', () => {
        const isOpen = btn.classList.contains('active');
        if (isOpen) {
            panel.style.maxHeight = null;
            btn.classList.remove('active');
            btn.setAttribute('aria-expanded', 'false');
            btn.querySelector('span').textContent = 'Show More Reviews';
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
            btn.classList.add('active');
            btn.setAttribute('aria-expanded', 'true');
            btn.querySelector('span').textContent = 'Show Fewer Reviews';
        }
    });
}

function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';
    
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= review.rating) {
            starsHtml += '<i class="fa-solid fa-star"></i>';
        } else {
            starsHtml += '<i class="fa-regular fa-star"></i>';
        }
    }
    
    card.innerHTML = `
        <div class="review-stars">${starsHtml}</div>
        <p class="review-text">"${escapeHtml(review.message)}"</p>
        <div class="review-author">
            <span class="review-name">${escapeHtml(review.name)}</span>
            <span class="review-source"><i class="fa-solid fa-globe"></i> Website Review</span>
        </div>
    `;
    return card;
}

function loadLocalReviews() {
    const reviewsGrid = document.getElementById('reviews-grid');
    if (!reviewsGrid) return;
    
    const localReviews = JSON.parse(localStorage.getItem('breas_bb_reviews') || '[]');
    // Render local reviews at the top of the reviews grid
    localReviews.forEach(review => {
        const card = createReviewCard(review);
        reviewsGrid.insertBefore(card, reviewsGrid.firstChild);
    });
}

function initReviewForm() {
    // Load existing reviews on initialization
    loadLocalReviews();

    const picker = document.getElementById('star-picker');
    const form = document.getElementById('review-form');
    if (!picker || !form) return;

    const stars = Array.from(picker.querySelectorAll('i'));
    const ratingError = document.getElementById('rating-error');

    const paintStars = (rating) => {
        stars.forEach(star => {
            const value = Number(star.getAttribute('data-value'));
            star.classList.toggle('fa-solid', value <= rating);
            star.classList.toggle('fa-regular', value > rating);
        });
    };

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = Number(star.getAttribute('data-value'));
            picker.setAttribute('data-rating', String(value));
            paintStars(value);
            if (ratingError) {
                ratingError.style.display = 'none';
            }
        });
        star.addEventListener('mouseenter', () => {
            paintStars(Number(star.getAttribute('data-value')));
        });
    });

    picker.addEventListener('mouseleave', () => {
        paintStars(Number(picker.getAttribute('data-rating')));
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('review-name').value.trim();
        const message = document.getElementById('review-message').value.trim();
        const rating = Number(picker.getAttribute('data-rating'));

        // Validate that user selected a rating
        if (rating === 0) {
            if (ratingError) {
                ratingError.style.display = 'flex';
            }
            picker.classList.remove('jiggle');
            void picker.offsetWidth; // Force reflow
            picker.classList.add('jiggle');
            return;
        }

        if (!name || !message) return;

        // Save review to LocalStorage
        const review = {
            name: name,
            message: message,
            rating: rating,
            date: new Date().toLocaleDateString()
        };

        const localReviews = JSON.parse(localStorage.getItem('breas_bb_reviews') || '[]');
        localReviews.push(review);
        localStorage.setItem('breas_bb_reviews', JSON.stringify(localReviews));

        // Create card and insert with entry animation
        const reviewsGrid = document.getElementById('reviews-grid');
        if (reviewsGrid) {
            const card = createReviewCard(review);
            card.classList.add('new-review');
            reviewsGrid.insertBefore(card, reviewsGrid.firstChild);
        }

        // Hide form and show success message
        form.style.display = 'none';
        const successMsg = document.getElementById('review-success-msg');
        if (successMsg) {
            successMsg.style.display = 'block';
        }

        // Setup the optional email backup option
        const starsText = '★'.repeat(rating) + '☆'.repeat(5 - rating);
        const subject = `Website Review from ${name}`;
        const body = `Name: ${name}\nRating: ${starsText}\n\nReview:\n${message}`;
        const mailtoLink = `mailto:breasbeauty23@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        const emailBtn = document.getElementById('btn-email-copy');
        if (emailBtn) {
            const newEmailBtn = emailBtn.cloneNode(true);
            newEmailBtn.addEventListener('click', () => {
                window.location.href = mailtoLink;
            });
            emailBtn.replaceWith(newEmailBtn);
        }
    });

    const resetBtn = document.getElementById('btn-reset-form');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            form.reset();
            picker.setAttribute('data-rating', '0');
            paintStars(0);
            if (ratingError) {
                ratingError.style.display = 'none';
            }
            const successMsg = document.getElementById('review-success-msg');
            if (successMsg) {
                successMsg.style.display = 'none';
            }
            form.style.display = 'block';
        });
    }
}

function initTipsSlideshows() {
    servicesData.forEach((category, index) => {
        if (!category.tips || !category.tips.length) return;

        let tipIndex = 0;
        const slideEl = document.getElementById(`tips-slide-${index}`);
        const barEl = document.getElementById(`tips-bar-${index}`);
        if (!slideEl) return;

        // Kick off the progress bar animation for the first tip
        if (barEl) requestAnimationFrame(() => barEl.classList.add('animate'));

        setInterval(() => {
            tipIndex = (tipIndex + 1) % category.tips.length;

            slideEl.classList.add('fade');
            setTimeout(() => {
                slideEl.textContent = category.tips[tipIndex];
                slideEl.classList.remove('fade');

                // If this accordion is open, recalc its height so the new tip never gets clipped
                const accordionEl = slideEl.closest('.accordion');
                const contentEl = document.getElementById(`content-${index}`);
                if (accordionEl && contentEl && accordionEl.classList.contains('active')) {
                    contentEl.style.maxHeight = contentEl.scrollHeight + 'px';
                }
            }, 350);

            if (barEl) {
                barEl.classList.remove('animate');
                void barEl.offsetWidth; // force reflow so the animation restarts cleanly
                barEl.classList.add('animate');
            }
        }, 6000);
    });
}

function addToCart(name, price, category) {
    cart.push({ id: Date.now(), name, price, category });
    updateCart();
    renderPreviewPanel();
    openCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
    renderPreviewPanel();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const bookBtn = document.getElementById('book-btn');

    cartCount.innerText = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart-msg">Your cart is empty.</div>';
        cartTotalPrice.innerText = '$0';
        bookBtn.disabled = true;
        return;
    }

    let total = 0;
    cartItems.innerHTML = cart.map(item => {
        total += item.price;
        return `
            <div class="cart-item">
                <div>
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price}</div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
    }).join('');

    cartTotalPrice.innerText = `$${total}`;
    bookBtn.disabled = false;
}

function openCart() {
    document.getElementById('cart-drawer').classList.add('active');
    document.getElementById('cart-overlay').classList.add('active');
}

function closeCart() {
    document.getElementById('cart-drawer').classList.remove('active');
    document.getElementById('cart-overlay').classList.remove('active');
}

function openModal() {
    document.getElementById('booking-modal').classList.add('active');
    document.getElementById('booking-modal-overlay').classList.add('active');
}

function closeModal() {
    document.getElementById('booking-modal').classList.remove('active');
    document.getElementById('booking-modal-overlay').classList.remove('active');
}

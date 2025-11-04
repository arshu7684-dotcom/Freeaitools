// Complete tools data with all AI tools
const toolsData = {
    categories: [
        {
            id: 'writing',
            name: 'AI Writing Tools',
            icon: '✍️',
            description: 'Content creation, writing assistance',
            count: 10,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: 'image',
            name: 'AI Image Generation',
            icon: '🎨',
            description: 'Create stunning visuals from text',
            count: 10,
            color: 'from-pink-500 to-rose-500'
        },
        {
            id: 'video',
            name: 'AI Video & Animation',
            icon: '🎬',
            description: 'Video generation and editing',
            count: 10,
            color: 'from-purple-500 to-indigo-500'
        },
        {
            id: 'voice',
            name: 'AI Voice & Music',
            icon: '🎧',
            description: 'Voice cloning and music generation',
            count: 10,
            color: 'from-green-500 to-emerald-500'
        },
        {
            id: 'code',
            name: 'AI Code & Developer Tools',
            icon: '💻',
            description: 'Code generation and assistance',
            count: 10,
            color: 'from-gray-600 to-gray-800'
        },
        {
            id: 'editing',
            name: 'AI Photo Editing',
            icon: '🖼️',
            description: 'Background removal and editing',
            count: 10,
            color: 'from-orange-500 to-red-500'
        },
        {
            id: 'productivity',
            name: 'AI Productivity & Research',
            icon: '📊',
            description: 'Research and productivity tools',
            count: 10,
            color: 'from-indigo-500 to-purple-500'
        },
        {
            id: 'design',
            name: 'AI Design & Branding',
            icon: '💡',
            description: 'Design and branding assistance',
            count: 10,
            color: 'from-yellow-500 to-orange-500'
        }
    ],

    tools: [
        // 🧠 AI Writing Tools (10)
        { id: 1, name: "ChatGPT", description: "Advanced AI chatbot for writing and conversation", category: "writing", url: "https://chat.openai.com", icon: "💬", pricing: "freemium", features: ["Content writing", "Code assistance", "Research"], rating: 4.8, trending: true },
        { id: 2, name: "Gemini", description: "Google's AI assistant for writing and tasks", category: "writing", url: "https://gemini.google.com", icon: "🔷", pricing: "free", features: ["Multimodal AI", "Google integration", "Research"], rating: 4.6, trending: true },
        { id: 3, name: "Copy.ai", description: "AI writing assistant for marketing content", category: "writing", url: "https://copy.ai", icon: "📝", pricing: "freemium", features: ["Marketing copy", "Content templates", "Brand voice"], rating: 4.4, trending: false },
        { id: 4, name: "Writesonic", description: "AI writer for blogs, ads, and websites", category: "writing", url: "https://writesonic.com", icon: "✏️", pricing: "freemium", features: ["Blog writing", "SEO content", "Multiple languages"], rating: 4.3, trending: false },
        { id: 5, name: "Jasper AI", description: "AI content creator for businesses", category: "writing", url: "https://jasper.ai", icon: "🤖", pricing: "paid", features: ["Business content", "Brand voice", "Team collaboration"], rating: 4.5, trending: false },
        { id: 6, name: "Rytr", description: "AI writing assistant for various content types", category: "writing", url: "https://rytr.me", icon: "🖊️", pricing: "freemium", features: ["Content generation", "Multiple tones", "Plagiarism check"], rating: 4.2, trending: false },
        { id: 7, name: "Quillbot", description: "AI paraphrasing and grammar checking tool", category: "writing", url: "https://quillbot.com", icon: "🔄", pricing: "freemium", features: ["Paraphrasing", "Grammar check", "Summarizer"], rating: 4.4, trending: false },
        { id: 8, name: "Grammarly", description: "AI writing assistant for grammar and style", category: "writing", url: "https://grammarly.com", icon: "📚", pricing: "freemium", features: ["Grammar check", "Style suggestions", "Plagiarism detector"], rating: 4.7, trending: false },
        { id: 9, name: "ParagraphAI", description: "AI writing assistant for various purposes", category: "writing", url: "https://paragraphai.com", icon: "📄", pricing: "freemium", features: ["Content generation", "Email writing", "Social media"], rating: 4.1, trending: false },
        { id: 10, name: "Typely", description: "Writing assistant for clarity and correctness", category: "writing", url: "https://typely.com", icon: "🔍", pricing: "free", features: ["Proofreading", "Style guide", "Readability analysis"], rating: 4.0, trending: false },

        // 🎨 AI Image Generation (10)
        { id: 11, name: "Leonardo AI", description: "AI image generation with fine-tuned models", category: "image", url: "https://leonardo.ai", icon: "🎨", pricing: "freemium", features: ["Image generation", "Model training", "High quality"], rating: 4.6, trending: true },
        { id: 12, name: "Playground AI", description: "Creative AI image generation platform", category: "image", url: "https://playground.com", icon: "🖼️", pricing: "freemium", features: ["Creative tools", "Multiple styles", "Easy to use"], rating: 4.4, trending: false },
        { id: 13, name: "BlueWillow", description: "AI image generator for various art styles", category: "image", url: "https://bluewillow.ai", icon: "🌊", pricing: "free", features: ["Multiple styles", "Community driven", "Regular updates"], rating: 4.2, trending: false },
        { id: 14, name: "CivitAI", description: "AI art community with custom models", category: "image", url: "https://civitai.com", icon: "🏛️", pricing: "free", features: ["Community models", "Style sharing", "Model training"], rating: 4.3, trending: true },
        { id: 15, name: "Mage Space", description: "AI image generation with various models", category: "image", url: "https://mage.space", icon: "🔮", pricing: "freemium", features: ["Multiple models", "No restrictions", "Fast generation"], rating: 4.5, trending: false },
        { id: 16, name: "NightCafe", description: "AI art creator with multiple algorithms", category: "image", url: "https://creator.nightcafe.studio", icon: "☕", pricing: "freemium", features: ["Multiple algorithms", "Art community", "Daily credits"], rating: 4.3, trending: false },
        { id: 17, name: "Fotor AI", description: "AI image generator and editor", category: "image", url: "https://fotor.com", icon: "🖌️", pricing: "freemium", features: ["Image generation", "Photo editing", "Templates"], rating: 4.2, trending: false },
        { id: 18, name: "Canva AI", description: "AI design tools within Canva platform", category: "image", url: "https://canva.com", icon: "🎭", pricing: "freemium", features: ["Design tools", "Templates", "Magic design"], rating: 4.7, trending: true },
        { id: 19, name: "Bing Image Creator", description: "Microsoft's AI image generator", category: "image", url: "https://bing.com/create", icon: "🔍", pricing: "free", features: ["DALL-E powered", "Free credits", "Microsoft integration"], rating: 4.4, trending: false },
        { id: 20, name: "Firefly", description: "Adobe's creative generative AI", category: "image", url: "https://firefly.adobe.com", icon: "🔥", pricing: "freemium", features: ["Adobe ecosystem", "Professional tools", "Commercial use"], rating: 4.6, trending: true },

        // 🎬 AI Video & Animation Tools (10)
        { id: 21, name: "Pika Labs", description: "AI video generation from text and images", category: "video", url: "https://pika.art", icon: "⚡", pricing: "freemium", features: ["Text to video", "Image to video", "Style transfer"], rating: 4.5, trending: true },
        { id: 22, name: "Runway ML", description: "AI video editing and generation platform", category: "video", url: "https://runwayml.com", icon: "🎬", pricing: "freemium", features: ["Video editing", "AI magic tools", "Green screen"], rating: 4.6, trending: true },
        { id: 23, name: "Kaiber", description: "AI-powered video creation platform", category: "video", url: "https://kaiber.ai", icon: "🌊", pricing: "freemium", features: ["Video generation", "Music visualization", "Artistic styles"], rating: 4.3, trending: false },
        { id: 24, name: "Synthesia", description: "AI video generation with virtual avatars", category: "video", url: "https://synthesia.io", icon: "👨‍💼", pricing: "paid", features: ["AI avatars", "Multiple languages", "Professional use"], rating: 4.7, trending: false },
        { id: 25, name: "HeyGen", description: "AI video translator and avatar platform", category: "video", url: "https://heygen.com", icon: "🎭", pricing: "freemium", features: ["Video translation", "Avatar creation", "Lip sync"], rating: 4.4, trending: true },
        { id: 26, name: "Animoto", description: "AI-powered video maker for social media", category: "video", url: "https://animoto.com", icon: "📹", pricing: "freemium", features: ["Social media videos", "Templates", "Easy to use"], rating: 4.2, trending: false },
        { id: 27, name: "Descript", description: "AI video and audio editing platform", category: "video", url: "https://descript.com", icon: "🎙️", pricing: "freemium", features: ["Video editing", "Audio editing", "Transcription"], rating: 4.5, trending: false },
        { id: 28, name: "Veed.io", description: "Online video editing with AI features", category: "video", url: "https://veed.io", icon: "✂️", pricing: "freemium", features: ["Video editing", "Subtitles", "AI avatars"], rating: 4.3, trending: false },
        { id: 29, name: "FlexClip", description: "AI video maker with templates", category: "video", url: "https://flexclip.com", icon: "🎞️", pricing: "freemium", features: ["Video templates", "AI voiceover", "Stock media"], rating: 4.1, trending: false },
        { id: 30, name: "Lumen5", description: "AI video creator for content repurposing", category: "video", url: "https://lumen5.com", icon: "💡", pricing: "freemium", features: ["Content to video", "Brand kits", "Social media"], rating: 4.2, trending: false },

        // 🎧 AI Voice & Music Tools (10)
        { id: 31, name: "ElevenLabs", description: "Most realistic AI voice generation", category: "voice", url: "https://elevenlabs.io", icon: "🎙️", pricing: "freemium", features: ["Voice cloning", "Text-to-speech", "Multiple languages"], rating: 4.8, trending: true },
        { id: 32, name: "Uberduck", description: "AI voice generation and synth platform", category: "voice", url: "https://uberduck.ai", icon: "🦆", pricing: "freemium", features: ["Voice cloning", "Text-to-speech", "Rap generation"], rating: 4.3, trending: false },
        { id: 33, name: "Voicemod", description: "AI voice changer and soundboard", category: "voice", url: "https://voicemod.net", icon: "🎭", pricing: "freemium", features: ["Voice changing", "Soundboard", "Real-time effects"], rating: 4.4, trending: false },
        { id: 34, name: "Melobytes", description: "AI music composition platform", category: "voice", url: "https://melobytes.com", icon: "🎵", pricing: "free", features: ["Music composition", "Multiple genres", "AI algorithms"], rating: 4.0, trending: false },
        { id: 35, name: "Soundraw", description: "AI music generator for creators", category: "voice", url: "https://soundraw.io", icon: "🎶", pricing: "freemium", features: ["Music generation", "Royalty free", "Customizable"], rating: 4.3, trending: false },
        { id: 36, name: "Beatoven", description: "AI music composition for videos", category: "voice", url: "https://beatoven.ai", icon: "🎻", pricing: "freemium", features: ["Video music", "Mood based", "Royalty free"], rating: 4.2, trending: false },
        { id: 37, name: "Mubert", description: "AI music generator for streaming", category: "voice", url: "https://mubert.com", icon: "🌊", pricing: "freemium", features: ["Royalty free", "Streaming", "Customizable"], rating: 4.1, trending: false },
        { id: 38, name: "LALAL.AI", description: "AI vocal and instrument removal", category: "voice", url: "https://lalal.ai", icon: "🎤", pricing: "freemium", features: ["Vocal removal", "Stem separation", "High quality"], rating: 4.5, trending: false },
        { id: 39, name: "Vocal Remover", description: "AI tool to remove vocals from music", category: "voice", url: "https://vocalremover.org", icon: "🎧", pricing: "free", features: ["Vocal removal", "Instrumental extraction", "Easy to use"], rating: 4.2, trending: false },
        { id: 40, name: "Aiva", description: "AI composer for emotional music", category: "voice", url: "https://aiva.ai", icon: "🎼", pricing: "freemium", features: ["Emotional music", "Multiple genres", "Commercial use"], rating: 4.4, trending: false },

        // 💻 AI Code & Developer Tools (10)
        { id: 41, name: "GitHub Copilot", description: "AI pair programmer for code completion", category: "code", url: "https://github.com/features/copilot", icon: "🤖", pricing: "freemium", features: ["Code completion", "Multiple languages", "VS Code integration"], rating: 4.5, trending: true },
        { id: 42, name: "Replit Ghostwriter", description: "AI coding assistant in browser", category: "code", url: "https://replit.com", icon: "👻", pricing: "freemium", features: ["Browser based", "Code completion", "Learning tools"], rating: 4.3, trending: false },
        { id: 43, name: "Codeium", description: "Free AI code completion tool", category: "code", url: "https://codeium.com", icon: "⚡", pricing: "free", features: ["Free tier", "Multiple IDEs", "Fast completion"], rating: 4.4, trending: true },
        { id: 44, name: "Tabnine", description: "AI code completion for developers", category: "code", url: "https://tabnine.com", icon: "🚀", pricing: "freemium", features: ["Code completion", "Multiple languages", "Team features"], rating: 4.3, trending: false },
        { id: 45, name: "Sourcegraph Cody", description: "AI coding assistant by Sourcegraph", category: "code", url: "https://sourcegraph.com", icon: "🔍", pricing: "freemium", features: ["Code search", "AI assistance", "Enterprise features"], rating: 4.2, trending: false },
        { id: 46, name: "CodeGPT", description: "AI coding assistant with GPT models", category: "code", url: "https://codegpt.co", icon: "💬", pricing: "freemium", features: ["GPT models", "Code explanation", "Debugging help"], rating: 4.1, trending: false },
        { id: 47, name: "Warp", description: "AI-powered terminal for developers", category: "code", url: "https://warp.dev", icon: "🔄", pricing: "free", features: ["Smart terminal", "AI commands", "Workflow optimization"], rating: 4.4, trending: true },
        { id: 48, name: "AskCodi", description: "AI assistant for code generation", category: "code", url: "https://askcodi.com", icon: "💡", pricing: "freemium", features: ["Code generation", "Multiple languages", "Learning focused"], rating: 4.0, trending: false },
        { id: 49, name: "Mutable", description: "AI for code acceleration", category: "code", url: "https://mutable.ai", icon: "⚙️", pricing: "freemium", features: ["Code acceleration", "AI assistance", "Productivity tools"], rating: 4.2, trending: false },
        { id: 50, name: "Phind", description: "AI search engine for developers", category: "code", url: "https://phind.com", icon: "🔎", pricing: "free", features: ["Developer search", "Code examples", "Problem solving"], rating: 4.5, trending: true },

        // 🖼️ AI Photo Editing (10)
        { id: 51, name: "Remove.bg", description: "AI background removal tool", category: "editing", url: "https://remove.bg", icon: "✂️", pricing: "freemium", features: ["Background removal", "Fast processing", "API available"], rating: 4.7, trending: true },
        { id: 52, name: "Cleanup.pictures", description: "Remove objects and defects from photos", category: "editing", url: "https://cleanup.pictures", icon: "🧹", pricing: "freemium", features: ["Object removal", "Photo cleanup", "Easy to use"], rating: 4.5, trending: false },
        { id: 53, name: "Magic Eraser", description: "Remove unwanted objects from images", category: "editing", url: "https://magicstudio.com/magic-eraser", icon: "🧙", pricing: "freemium", features: ["Object removal", "Simple interface", "Quick results"], rating: 4.4, trending: false },
        { id: 54, name: "Pixlr", description: "AI photo editor with advanced tools", category: "editing", url: "https://pixlr.com", icon: "🎨", pricing: "freemium", features: ["Photo editing", "AI tools", "Templates"], rating: 4.3, trending: false },
        { id: 55, name: "Fotor Background Remover", description: "AI background removal in Fotor", category: "editing", url: "https://fotor.com", icon: "🖼️", pricing: "freemium", features: ["Background removal", "Photo editing", "Design tools"], rating: 4.2, trending: false },
        { id: 56, name: "Cutout.pro", description: "AI photo and video editing platform", category: "editing", url: "https://cutout.pro", icon: "✂️", pricing: "freemium", features: ["Photo editing", "Video editing", "AI tools"], rating: 4.3, trending: false },
        { id: 57, name: "Remove Watermark AI", description: "AI tool to remove watermarks", category: "editing", url: "https://watermarkremover.io", icon: "💧", pricing: "freemium", features: ["Watermark removal", "Image restoration", "Easy to use"], rating: 4.1, trending: false },
        { id: 58, name: "Clipdrop", description: "AI image editing toolkit", category: "editing", url: "https://clipdrop.co", icon: "📸", pricing: "freemium", features: ["Image editing", "Object removal", "AI tools"], rating: 4.4, trending: true },
        { id: 59, name: "PhotoRoom", description: "AI background removal and editing", category: "editing", url: "https://photoroom.com", icon: "🏠", pricing: "freemium", features: ["Background removal", "Product photos", "Professional results"], rating: 4.5, trending: false },
        { id: 60, name: "Erase.bg", description: "AI background removal service", category: "editing", url: "https://erase.bg", icon: "🧽", pricing: "freemium", features: ["Background removal", "Batch processing", "High quality"], rating: 4.3, trending: false },

        // 📊 AI Productivity & Research (10)
        { id: 61, name: "Notion AI", description: "AI writing in Notion workspace", category: "productivity", url: "https://notion.so", icon: "📝", pricing: "paid", features: ["Writing assistance", "Task management", "Knowledge base"], rating: 4.6, trending: true },
        { id: 62, name: "Perplexity", description: "AI search and research assistant", category: "productivity", url: "https://perplexity.ai", icon: "🤔", pricing: "freemium", features: ["AI search", "Source citations", "Research focused"], rating: 4.7, trending: true },
        { id: 63, name: "ChatDoc", description: "AI document analysis and Q&A", category: "productivity", url: "https://chatdoc.com", icon: "📄", pricing: "freemium", features: ["Document analysis", "Q&A system", "Research helper"], rating: 4.3, trending: false },
        { id: 64, name: "Elicit", description: "AI research assistant for papers", category: "productivity", url: "https://elicit.org", icon: "🔬", pricing: "freemium", features: ["Research papers", "Literature review", "Data extraction"], rating: 4.4, trending: false },
        { id: 65, name: "Fireflies.ai", description: "AI meeting transcription and notes", category: "productivity", url: "https://fireflies.ai", icon: "🔥", pricing: "freemium", features: ["Meeting transcription", "Note taking", "Team collaboration"], rating: 4.5, trending: false },
        { id: 66, name: "Otter.ai", description: "AI meeting assistant and transcription", category: "productivity", url: "https://otter.ai", icon: "🦦", pricing: "freemium", features: ["Live transcription", "Meeting not

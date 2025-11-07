// Complete tools data with 130+ AI tools
const toolsData = {
    categories: [
        {
            id: 'writing',
            name: 'AI Writing Tools',
            icon: '✍️',
            description: 'Content creation, writing assistance',
            count: 15,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: 'image',
            name: 'AI Image Generation',
            icon: '🎨',
            description: 'Create stunning visuals from text',
            count: 25,
            color: 'from-pink-500 to-rose-500'
        },
        {
            id: 'video',
            name: 'AI Video & Animation',
            icon: '🎬',
            description: 'Video generation and editing',
            count: 20,
            color: 'from-purple-500 to-indigo-500'
        },
        {
            id: 'voice',
            name: 'AI Voice & Music',
            icon: '🎧',
            description: 'Voice cloning and music generation',
            count: 20,
            color: 'from-green-500 to-emerald-500'
        },
        {
            id: 'code',
            name: 'AI Code & Developer Tools',
            icon: '💻',
            description: 'Code generation and assistance',
            count: 15,
            color: 'from-gray-600 to-gray-800'
        },
        {
            id: 'editing',
            name: 'AI Photo Editing',
            icon: '🖼️',
            description: 'Background removal and editing',
            count: 15,
            color: 'from-orange-500 to-red-500'
        },
        {
            id: 'productivity',
            name: 'AI Productivity & Research',
            icon: '📊',
            description: 'Research and productivity tools',
            count: 15,
            color: 'from-indigo-500 to-purple-500'
        },
        {
            id: 'design',
            name: 'AI Design & 3D Tools',
            icon: '💡',
            description: 'Design and 3D modeling assistance',
            count: 10,
            color: 'from-yellow-500 to-orange-500'
        }
    ],

    tools: [
        // 🧠 AI Writing Tools (15)
        { id: 1, name: "ChatGPT", description: "Advanced AI chatbot for writing and conversation", category: "writing", url: "https://chat.openai.com", icon: "💬", pricing: "freemium", features: ["Content writing", "Code assistance", "Research"], rating: 4.8, trending: true },
        { id: 2, name: "Gemini", description: "Google's AI assistant for writing and tasks", category: "writing", url: "https://gemini.google.com", icon: "🔷", pricing: "free", features: ["Multimodal AI", "Google integration", "Research"], rating: 4.6, trending: true },
        { id: 3, name: "Claude", description: "AI assistant with large context window", category: "writing", url: "https://claude.ai", icon: "🤖", pricing: "free", features: ["Large context", "File upload", "Analysis"], rating: 4.7, trending: true },
        { id: 4, name: "Microsoft Copilot", description: "AI assistant with internet search", category: "writing", url: "https://copilot.microsoft.com", icon: "🔍", pricing: "free", features: ["Internet search", "Image generation", "Coding"], rating: 4.5, trending: false },
        { id: 5, name: "Perplexity AI", description: "AI search engine with source citations", category: "writing", url: "https://www.perplexity.ai", icon: "🤔", pricing: "freemium", features: ["Source citations", "Research focused", "Real-time"], rating: 4.6, trending: true },
        { id: 6, name: "Hugging Face Chat", description: "Open-source AI models platform", category: "writing", url: "https://huggingface.co/chat", icon: "🤗", pricing: "free", features: ["Open source", "Multiple models", "Customizable"], rating: 4.3, trending: false },
        { id: 7, name: "You.com", description: "AI search engine with sources", category: "writing", url: "https://you.com", icon: "🌐", pricing: "free", features: ["AI search", "Source display", "Privacy"], rating: 4.2, trending: false },
        { id: 8, name: "Poe", description: "Multiple AI models in one platform", category: "writing", url: "https://poe.com", icon: "📚", pricing: "freemium", features: ["Multiple models", "Chat with AI", "Easy switching"], rating: 4.4, trending: false },
        { id: 9, name: "Copy.ai", description: "AI writing assistant for marketing content", category: "writing", url: "https://copy.ai", icon: "📝", pricing: "freemium", features: ["Marketing copy", "Content templates", "Brand voice"], rating: 4.4, trending: false },
        { id: 10, name: "Writesonic", description: "AI writer for blogs, ads, and websites", category: "writing", url: "https://writesonic.com", icon: "✏️", pricing: "freemium", features: ["Blog writing", "SEO content", "Multiple languages"], rating: 4.3, trending: false },
        { id: 11, name: "Jasper AI", description: "AI content creator for businesses", category: "writing", url: "https://jasper.ai", icon: "🏢", pricing: "paid", features: ["Business content", "Brand voice", "Team collaboration"], rating: 4.5, trending: false },
        { id: 12, name: "Rytr", description: "AI writing assistant for various content types", category: "writing", url: "https://rytr.me", icon: "🖊️", pricing: "freemium", features: ["Content generation", "Multiple tones", "Plagiarism check"], rating: 4.2, trending: false },
        { id: 13, name: "Quillbot", description: "AI paraphrasing and grammar checking tool", category: "writing", url: "https://quillbot.com", icon: "🔄", pricing: "freemium", features: ["Paraphrasing", "Grammar check", "Summarizer"], rating: 4.4, trending: false },
        { id: 14, name: "Grammarly", description: "AI writing assistant for grammar and style", category: "writing", url: "https://grammarly.com", icon: "📚", pricing: "freemium", features: ["Grammar check", "Style suggestions", "Plagiarism detector"], rating: 4.7, trending: false },
        { id: 15, name: "Wordtune", description: "AI writing assistant for better phrasing", category: "writing", url: "https://www.wordtune.com", icon: "✨", pricing: "freemium", features: ["Rephrasing", "Tone adjustment", "Writing improvement"], rating: 4.3, trending: false },

        // 🎨 AI Image Generation (25)
        { id: 16, name: "DALL-E 3", description: "OpenAI's advanced image generator", category: "image", url: "https://chat.openai.com", icon: "🎨", pricing: "paid", features: ["High quality", "Creative images", "Text understanding"], rating: 4.9, trending: true },
        { id: 17, name: "Bing Image Creator", description: "Microsoft's free image generator", category: "image", url: "https://bing.com/create", icon: "🔍", pricing: "free", features: ["DALL-E powered", "Free credits", "Microsoft integration"], rating: 4.7, trending: true },
        { id: 18, name: "Leonardo AI", description: "AI image generation with fine-tuned models", category: "image", url: "https://leonardo.ai", icon: "🖼️", pricing: "freemium", features: ["Image generation", "Model training", "High quality"], rating: 4.6, trending: true },
        { id: 19, name: "Playground AI", description: "Creative AI image generation platform", category: "image", url: "https://playground.ai", icon: "🏞️", pricing: "freemium", features: ["Creative tools", "Multiple styles", "Easy to use"], rating: 4.4, trending: false },
        { id: 20, name: "BlueWillow", description: "AI image generator for various art styles", category: "image", url: "https://bluewillow.ai", icon: "🌊", pricing: "free", features: ["Multiple styles", "Community driven", "Regular updates"], rating: 4.2, trending: false },
        { id: 21, name: "Midjourney", description: "AI art generation through Discord", category: "image", url: "https://midjourney.com", icon: "🎭", pricing: "paid", features: ["Art generation", "Style transfer", "Community"], rating: 4.8, trending: true },
        { id: 22, name: "Stable Diffusion", description: "Open-source image generation", category: "image", url: "https://stablediffusionweb.com", icon: "⚡", pricing: "free", features: ["Open source", "Customizable", "Community models"], rating: 4.5, trending: false },
        { id: 23, name: "Adobe Firefly", description: "Adobe's creative generative AI", category: "image", url: "https://firefly.adobe.com", icon: "🔥", pricing: "freemium", features: ["Adobe ecosystem", "Professional tools", "Commercial use"], rating: 4.6, trending: true },
        { id: 24, name: "Canva AI", description: "AI design tools within Canva platform", category: "image", url: "https://canva.com", icon: "🎨", pricing: "freemium", features: ["Design tools", "Templates", "Magic design"], rating: 4.7, trending: true },
        { id: 25, name: "Clipdrop", description: "AI image editing toolkit", category: "image", url: "https://clipdrop.co", icon: "📸", pricing: "freemium", features: ["Image editing", "Object removal", "AI tools"], rating: 4.4, trending: true },
        { id: 26, name: "Craiyon", description: "Free AI image generator", category: "image", url: "https://craiyon.com", icon: "🖌️", pricing: "free", features: ["Completely free", "Easy to use", "Multiple styles"], rating: 4.0, trending: false },
        { id: 27, name: "GetImg.ai", description: "AI image generator and editor", category: "image", url: "https://getimg.ai", icon: "🖼️", pricing: "freemium", features: ["Image generation", "Editing tools", "Multiple models"], rating: 4.3, trending: false },
        { id: 28, name: "DreamStudio", description: "Stability AI's official platform", category: "image", url: "https://dreamstudio.ai", icon: "🌙", pricing: "freemium", features: ["Stable Diffusion", "Professional tools", "API access"], rating: 4.4, trending: false },
        { id: 29, name: "Fooocus", description: "Midjourney-style image generator", category: "image", url: "https://github.com/lllyasviel/Fooocus", icon: "🔮", pricing: "free", features: ["Local installation", "High quality", "Easy to use"], rating: 4.5, trending: true },
        { id: 30, name: "Libre AI", description: "Open-source AI tools collection", category: "image", url: "https://libre.ai", icon: "🔓", pricing: "free", features: ["Open source", "Multiple tools", "Community driven"], rating: 4.1, trending: false },
        { id: 31, name: "Krea.ai", description: "Real-time image generation", category: "image", url: "https://krea.ai", icon: "⚡", pricing: "freemium", features: ["Real-time generation", "Enhancement", "AI tools"], rating: 4.3, trending: false },
        { id: 32, name: "CF Spark", description: "Creative Fabrica's AI generator", category: "image", url: "https://creativefabrica.com/spark", icon: "✨", pricing: "freemium", features: ["Creative assets", "Design tools", "Fonts integration"], rating: 4.2, trending: false },
        { id: 33, name: "Pollinations.ai", description: "AI for video and image creation", category: "image", url: "https://pollinations.ai", icon: "🌸", pricing: "free", features: ["Video generation", "Image creation", "Short prompts"], rating: 4.0, trending: false },
        { id: 34, name: "SeaArt.ai", description: "AI art platform with daily credits", category: "image", url: "https://seaart.ai", icon: "🌊", pricing: "freemium", features: ["Daily credits", "Multiple styles", "Community"], rating: 4.2, trending: false },
        { id: 35, name: "CivitAI", description: "AI art community with custom models", category: "image", url: "https://civitai.com", icon: "🏛️", pricing: "free", features: ["Community models", "Style sharing", "Model training"], rating: 4.3, trending: true },
        { id: 36, name: "Mage Space", description: "AI image generation platform", category: "image", url: "https://mage.space", icon: "🔮", pricing: "freemium", features: ["Multiple models", "No restrictions", "Fast generation"], rating: 4.5, trending: false },
        { id: 37, name: "NightCafe", description: "AI art creator with algorithms", category: "image", url: "https://creator.nightcafe.studio", icon: "☕", pricing: "freemium", features: ["Multiple algorithms", "Art community", "Daily credits"], rating: 4.3, trending: false },
        { id: 38, name: "Fotor AI", description: "AI image generator and editor", category: "image", url: "https://fotor.com", icon: "🖌️", pricing: "freemium", features: ["Image generation", "Photo editing", "Templates"], rating: 4.2, trending: false },
        { id: 39, name: "Runway ML", description: "AI video and image generation", category: "image", url: "https://runwayml.com", icon: "🎬", pricing: "freemium", features: ["Video editing", "Image generation", "AI tools"], rating: 4.6, trending: true },
        { id: 40, name: "Pika Labs", description: "AI video and image generation", category: "image", url: "https://pika.art", icon: "⚡", pricing: "freemium", features: ["Text to video", "Image to video", "Style transfer"], rating: 4.5, trending: true },

        // 🎬 AI Video & Animation Tools (20)
        { id: 41, name: "Runway ML", description: "AI video editing and generation platform", category: "video", url: "https://runwayml.com", icon: "🎬", pricing: "freemium", features: ["Video editing", "AI magic tools", "Green screen"], rating: 4.6, trending: true },
        { id: 42, name: "Pika Labs", description: "AI video generation from text and images", category: "video", url: "https://pika.art", icon: "⚡", pricing: "freemium", features: ["Text to video", "Image to video", "Style transfer"], rating: 4.5, trending: true },
        { id: 43, name: "Luma Dream Machine", description: "High-quality video generator", category: "video", url: "https://lumalabs.ai/dream-machine", icon: "🌙", pricing: "freemium", features: ["Fast generation", "High quality", "Realistic videos"], rating: 4.7, trending: true },
        { id: 44, name: "Stable Video Diffusion", description: "OpenAI's video model", category: "video", url: "https://stability.ai/news/stable-video-diffusion-open-ai-video-model", icon: "🎥", pricing: "free", features: ["Open source", "Video generation", "Research"], rating: 4.4, trending: false },
        { id: 45, name: "Haiper", description: "AI video generation platform", category: "video", url: "https://haiper.ai", icon: "🚀", pricing: "freemium", features: ["Video generation", "Multiple styles", "Easy to use"], rating: 4.3, trending: true },
        { id: 46, name: "Moonvalley", description: "Text to amazing videos", category: "video", url: "https://moonvalley.ai", icon: "🌙", pricing: "freemium", features: ["Text to video", "Creative videos", "High quality"], rating: 4.2, trending: false },
        { id: 47, name: "Kling AI", description: "Advanced video generator", category: "video", url: "https://klingai.com", icon: "👑", pricing: "waitlist", features: ["Advanced generation", "Realistic videos", "New technology"], rating: 4.5, trending: true },
        { id: 48, name: "CapCut", description: "Video editor with AI features", category: "video", url: "https://capcut.com", icon: "✂️", pricing: "free", features: ["Auto captions", "AI scripting", "Effects"], rating: 4.6, trending: true },
        { id: 49, name: "Veed.io", description: "Online video editing with AI", category: "video", url: "https://veed.io", icon: "🎞️", pricing: "freemium", features: ["Auto subtitles", "Noise removal", "AI avatars"], rating: 4.3, trending: false },
        { id: 50, name: "Descript", description: "AI video and audio editing", category: "video", url: "https://descript.com", icon: "🎙️", pricing: "freemium", features: ["Video editing", "Audio editing", "Transcription"], rating: 4.5, trending: false },
        { id: 51, name: "Wisecut", description: "Automatic video editing", category: "video", url: "https://wisecut.ai", icon: "🤖", pricing: "freemium", features: ["Auto editing", "Silence removal", "Smart cuts"], rating: 4.2, trending: false },
        { id: 52, name: "Fliki", description: "Text to video with AI voiceover", category: "video", url: "https://fliki.ai", icon: "🎬", pricing: "freemium", features: ["Text to video", "AI voiceover", "Content creation"], rating: 4.3, trending: false },
        { id: 53, name: "Pictory", description: "Long videos to short clips", category: "video", url: "https://pictory.ai", icon: "📹", pricing: "freemium", features: ["Video summarization", "Clip creation", "Social media"], rating: 4.1, trending: false },
        { id: 54, name: "Opus Clip", description: "Viral short clips creator", category: "video", url: "https://opus.pro/clip", icon: "📱", pricing: "freemium", features: ["Viral clips", "Auto editing", "Content repurposing"], rating: 4.2, trending: false },
        { id: 55, name: "ScreenStory", description: "AI screen recording editor", category: "video", url: "https://screen.studio", icon: "💻", pricing: "freemium", features: ["Screen recording", "Auto editing", "Professional results"], rating: 4.4, trending: false },
        { id: 56, name: "Topaz Video AI", description: "Video quality enhancement", category: "video", url: "https://topazlabs.com/video-ai", icon: "🔍", pricing: "trial", features: ["Quality enhancement", "Upscaling", "Professional"], rating: 4.6, trending: false },
        { id: 57, name: "RawShort", description: "AI animated videos", category: "video", url: "https://rawshorts.com", icon: "🎨", pricing: "freemium", features: ["Animated videos", "Templates", "Easy creation"], rating: 4.0, trending: false },
        { id: 58, name: "HeyGen", description: "AI video translator with avatars", category: "video", url: "https://heygen.com", icon: "🎭", pricing: "freemium", features: ["Video translation", "Avatar creation", "Lip sync"], rating: 4.4, trending: true },
        { id: 59, name: "Kaiber", description: "AI-powered video creation", category: "video", url: "https://kaiber.ai", icon: "🌊", pricing: "freemium", features: ["Video generation", "Music visualization", "Artistic styles"], rating: 4.3, trending: false },
        { id: 60, name: "Synthesia", description: "AI video with virtual avatars", category: "video", url: "https://synthesia.io", icon: "👨‍💼", pricing: "paid", features: ["AI avatars", "Multiple languages", "Professional use"], rating: 4.7, trending: false },

        // 🎧 AI Voice & Music Tools (20)
        { id: 61, name: "ElevenLabs", description: "Most realistic AI voice generation", category: "voice", url: "https://elevenlabs.io", icon: "🎙️", pricing: "freemium", features: ["Voice cloning", "Text-to-speech", "Multiple languages"], rating: 4.8, trending: true },
        { id: 62, name: "Murf.ai", description: "Professional voiceovers AI", category: "voice", url: "https://murf.ai", icon: "🎤", pricing: "freemium", features: ["Professional voices", "Voice cloning", "Multiple languages"], rating: 4.5, trending: false },
        { id: 63, name: "Speechify", description: "Text to speech assistant", category: "voice", url: "https://speechify.com", icon: "📖", pricing: "freemium", features: ["Text to speech", "Multiple voices", "Listening"], rating: 4.4, trending: false },
        { id: 64, name: "Play.ht", description: "AI voice generator", category: "voice", url: "https://play.ht", icon: "🔊", pricing: "freemium", features: ["Text to speech", "Multiple languages", "Customizable"], rating: 4.3, trending: false },
        { id: 65, name: "TTSMaker", description: "Free text-to-speech generator", category: "voice", url: "https://ttsmaker.com", icon: "🆓", pricing: "free", features: ["Completely free", "Unlimited use", "Multiple voices"], rating: 4.2, trending: false },
        { id: 66, name: "Lovo.ai", description: "Realistic AI voices", category: "voice", url: "https://lovo.ai", icon: "❤️", pricing: "freemium", features: ["Realistic voices", "Voice cloning", "Multiple languages"], rating: 4.3, trending: false },
        { id: 67, name: "Kits.ai", description: "AI voice for singing", category: "voice", url: "https://kits.ai", icon: "🎵", pricing: "freemium", features: ["Voice cloning", "Singing voices", "Music creation"], rating: 4.4, trending: false },
        { id: 68, name: "Otter.ai", description: "AI meeting transcription", category: "voice", url: "https://otter.ai", icon: "🦦", pricing: "freemium", features: ["Meeting transcription", "Note taking", "Team collaboration"], rating: 4.4, trending: false },
        { id: 69, name: "Notta", description: "Audio/video to text transcription", category: "voice", url: "https://notta.ai", icon: "📝", pricing: "freemium", features: ["Transcription", "Multiple languages", "Accuracy"], rating: 4.3, trending: false },
        { id: 70, name: "Speechnotes", description: "Real-time voice typing", category: "voice", url: "https://speechnotes.co", icon: "⌨️", pricing: "free", features: ["Voice typing", "Real-time", "Easy to use"], rating: 4.1, trending: false },
        { id: 71, name: "Google Speech-to-Text", description: "Voice typing in Google Docs", category: "voice", url: "https://docs.google.com", icon: "📄", pricing: "free", features: ["Voice typing", "Google integration", "Accurate"], rating: 4.5, trending: false },
        { id: 72, name: "AssemblyAI", description: "AI transcription for developers", category: "voice", url: "https://assemblyai.com", icon: "👨‍💻", pricing: "freemium", features: ["Developer API", "Transcription", "AI features"], rating: 4.2, trending: false },
        { id: 73, name: "Voice.ai", description: "Real-time voice changer", category: "voice", url: "https://voice.ai", icon: "🎭", pricing: "freemium", features: ["Voice changing", "Voice library", "Real-time"], rating: 4.3, trending: false },
        { id: 74, name: "FakeYou", description: "Celebrity voice generation", category: "voice", url: "https://fakeyou.com", icon: "🎬", pricing: "free", features: ["Celebrity voices", "Fun tool", "Community"], rating: 4.0, trending: false },
        { id: 75, name: "Koe Recast", description: "Voice transformation tool", category: "voice", url: "https://koe.com/recast", icon: "🔄", pricing: "freemium", features: ["Voice transformation", "Real-time", "Multiple effects"], rating: 4.2, trending: false },
        { id: 76, name: "Suno AI", description: "AI music generation from text", category: "voice", url: "https://suno.com", icon: "🎶", pricing: "freemium", features: ["Text to music", "Full songs", "Multiple genres"], rating: 4.7, trending: true },
        { id: 77, name: "Udio", description: "AI music creation platform", category: "voice", url: "https://udio.com", icon: "🎹", pricing: "freemium", features: ["Music creation", "High quality", "Easy to use"], rating: 4.6, trending: true },
        { id: 78, name: "Boomy", description: "AI music creation", category: "voice", url: "https://boomy.com", icon: "🎧", pricing: "freemium", features: ["Music creation", "Multiple genres", "Royalty free"], rating: 4.3, trending: false },
        { id: 79, name: "AIVA", description: "AI classical music composer", category: "voice", url: "https://aiva.ai", icon: "🎻", pricing: "freemium", features: ["Classical music", "Emotional music", "Commercial use"], rating: 4.4, trending: false },
        { id: 80, name: "Mubert", description: "Royalty-free music generator", category: "voice", url: "https://mubert.com", icon: "🌊", pricing: "freemium", features: ["Royalty free", "Streaming", "Customizable"], rating: 4.1, trending: false },

        // 💻 AI Code & Developer Tools (15)
        { id: 81, name: "GitHub Copilot", description: "AI pair programmer", category: "code", url: "https://github.com/features/copilot", icon: "🤖", pricing: "freemium", features: ["Code completion", "Multiple languages", "VS Code integration"], rating: 4.5, trending: true },
        { id: 82, name: "Replit Ghostwriter", description: "AI coding assistant in browser", category: "code", url: "https://replit.com", icon: "👻", pricing: "freemium", features: ["Browser based", "Code completion", "Learning tools"], rating: 4.3, trending: false },
        { id: 83, name: "Amazon CodeWhisperer", description: "AWS AI coding companion", category: "code", url: "https://aws.amazon.com/codewhisperer/", icon: "☁️", pricing: "free", features: ["Code suggestions", "AWS integration", "Free for individuals"], rating: 4.2, trending: false },
        { id: 84, name: "Codium", description: "AI for code testing", category: "code", url: "https://codium.ai", icon: "🧪", pricing: "freemium", features: ["Code testing", "Test generation", "Quality assurance"], rating: 4.1, trending: false },
        { id: 85, name: "Tabnine", description: "AI code completion", category: "code", url: "https://tabnine.com", icon: "🚀", pricing: "freemium", features: ["Code completion", "Multiple languages", "Team features"], rating: 4.3, trending: false },
        { id: 86, name: "Codeium", description: "Free AI code completion", category: "code", url: "https://codeium.com", icon: "⚡", pricing: "free", features: ["Free tier", "Multiple IDEs", "Fast completion"], rating: 4.4, trending: true },
        { id: 87, name: "Blackbox AI", description: "Code generator and chatbot", category: "code", url: "https://blackbox.ai", icon: "📦", pricing: "freemium", features: ["Code generation", "Chat assistance", "Multiple languages"], rating: 4.2, trending: false },
        { id: 88, name: "Codiga", description: "Code analysis and automation", category: "code", url: "https://codiga.io", icon: "🔍", pricing: "freemium", features: ["Code analysis", "Automation", "Quality checks"], rating: 4.0, trending: false },
        { id: 89, name: "AskCodi", description: "AI code generation assistant", category: "code", url: "https://askcodi.com", icon: "💡", pricing: "freemium", features: ["Code generation", "Multiple languages", "Learning focused"], rating: 4.0, trending: false },
        { id: 90, name: "Phind", description: "AI search engine for developers", category: "code", url: "https://phind.com", icon: "🔎", pricing: "free", features: ["Developer search", "Code examples", "Problem solving"], rating: 4.5, trending: true },
        { id: 91, name: "Sourcegraph Cody", description: "AI coding assistant", category: "code", url: "https://sourcegraph.com", icon: "📚", pricing: "freemium", features: ["Code search", "AI assistance", "Enterprise features"], rating: 4.2, trending: false },
        { id: 92, name: "CodeGPT", description: "AI coding with GPT models", category: "code", url: "https://codegpt.co", icon: "💬", pricing: "freemium", features: ["GPT models", "Code explanation", "Debugging help"], rating: 4.1, trending: false },
        { id: 93, name: "Warp", description: "AI-powered terminal", category: "code", url: "https://warp.dev", icon: "🔄", pricing: "free", features: ["Smart terminal", "AI commands", "Workflow optimization"], rating: 4.4, trending: true },
        { id: 94, name: "Mutable", description: "AI for code acceleration", category: "code", url: "https://mutable.ai", icon: "⚙️", pricing: "freemium", features: ["Code acceleration", "AI assistance", "Productivity tools"], rating: 4.2, trending: false },
        { id: 95, name: "Exa.ai", description: "AI-powered content search", category: "code", url: "https://exa.ai", icon: "🌐", pricing: "freemium", features: ["Content search", "AI powered", "Developer API"], rating: 4.1, trending: false },

        // 🖼️ AI Photo Editing (15)
        { id: 96, name: "Remove.bg", description: "AI background removal tool", category: "editing", url: "https://remove.bg", icon: "✂️", pricing: "freemium", features: ["Background removal", "Fast processing", "API available"], rating: 4.7, trending: true },
        { id: 97, name: "Cleanup.pictures", description: "Remove objects from photos", category: "editing", url: "https://cleanup.pictures", icon: "🧹", pricing: "freemium", features: ["Object removal", "Photo cleanup", "Easy to use"], rating: 4.5, trending: false },
        { id: 98, name: "Magic Eraser", description: "Remove unwanted objects", category: "editing", url: "https://magiceraser.io", icon: "🧙", pricing: "freemium", features: ["Object removal", "Simple interface", "Quick results"], rating: 4.4, trending: false },
        { id: 99, name: "Pixlr", description: "AI photo editor", category: "editing", url: "https://pixlr.com", icon: "🎨", pricing: "freemium", features: ["Photo editing", "AI tools", "Templates"], rating: 4.3, trending: false },
        { id: 100, name: "Fotor Background Remover", description: "Background removal in Fotor", category: "editing", url: "https://fotor.com", icon: "🖼️", pricing: "freemium", features: ["Background removal", "Photo editing", "Design tools"], rating: 4.2, trending: false },
        { id: 101, name: "Cutout.pro", description: "AI photo and video editing", category: "editing", url: "https://cutout.pro", icon: "✂️", pricing: "freemium", features: ["Photo editing", "Video editing", "AI tools"], rating: 4.3, trending: false },
        { id: 102, name: "Remove Watermark AI", description: "Watermark removal tool", category: "editing", url: "https://watermarkremover.io", icon: "💧", pricing: "freemium", features: ["Watermark removal", "Image restoration", "Easy to use"], rating: 4.1, trending: false },
        { id: 103, name: "Clipdrop", description: "AI image editing toolkit", category: "editing", url: "https://clipdrop.co", icon: "📸", pricing: "freemium", features: ["Image editing", "Object removal", "AI tools"], rating: 4.4, trending: true },
        { id: 104, name: "PhotoRoom", description: "Background removal and editing", category: "editing", url: "https://photoroom.com", icon: "🏠", pricing: "freemium", features: ["Background removal", "Product photos", "Professional results"], rating: 4.5, trending: false },
        { id: 105, name: "Erase.bg", description: "AI background removal service", category: "editing", url: "https://erase.bg", icon: "🧽", pricing: "freemium", features: ["Background removal", "Batch processing", "High quality"], rating: 4.3, trending: false },
        { id: 106, name: "BgRemover.ai", description: "One-click background removal", category: "editing", url: "https://bgremover.ai", icon: "🎯", pricing: "freemium", features: ["Background removal", "One click", "Fast"], rating: 4.2, trending: false },
        { id: 107, name: "Upscale.media", description: "Image quality enhancement", category: "editing", url: "https://upscale.media", icon: "🔍", pricing: "freemium", features: ["Image upscaling", "Quality enhancement", "Easy to use"], rating: 4.4, trending: false },
        { id: 108, name: "AI Image Enlarger", description: "Image resolution enhancement", category: "editing", url: "https://imglarger.com", icon: "🖼️", pricing: "freemium", features: ["Image enlargement", "Quality preservation", "Multiple tools"], rating: 4.1, trending: false },
        { id: 109, name: "Let's Enhance", description: "Professional image enhancement", category: "editing", url: "https://letsenhance.io", icon: "✨", pricing: "freemium", features: ["Quality enhancement", "Professional tools", "Free credits"], rating: 4.3, trending: false },
        { id: 110, name: "Pixelcut", description: "Product image editing", category: "editing", url: "https://pixelcut.ai", icon: "📱", pricing: "freemium", features: ["Product photos", "Background removal", "E-commerce"], rating: 4.2, trending: false },

        // 📊 AI Productivity & Research (15)
        { id: 111, name: "Notion AI", description: "AI writing in Notion", category: "productivity", url: "https://notion.so", icon: "📝", pricing: "paid", features: ["Writing assistance", "Task management", "Knowledge base"], rating: 4.6, trending: true },
        { id: 112, name: "Gamma App", description: "AI presentation creator", category: "productivity", url: "https://gamma.app", icon: "📊", pricing: "freemium", features: ["Presentation maker", "Document creation", "AI design"], rating: 4.3, trending: true },
        { id: 113, name: "Tome", description: "AI presentation and storytelling", category: "productivity", url: "https://tome.app", icon: "📖", pricing: "freemium", features: ["Storytelling", "Presentation design", "AI generation"], rating: 4.4, trending: true },
        { id: 114, name: "Beautiful.AI", description: "Smart presentation maker", category: "productivity", url: "https://beautiful.ai", icon: "💎", pricing: "freemium", features: ["Smart presentations", "Design automation", "Templates"], rating: 4.2, trending: false },
        { id: 115, name: "ChatPDF", description: "AI PDF analysis and Q&A", category: "productivity", url: "https://chatpdf.com", icon: "📄", pricing: "freemium", features: ["PDF analysis", "Q&A system", "Research helper"], rating: 4.3, trending: false },
        { id: 116, name: "PDF.ai", description: "Chat with PDF documents", category: "productivity", url: "https://pdf.ai", icon: "🤖", pricing: "freemium", features: ["PDF chat", "Document analysis", "Multiple files"], rating: 4.2, trending: false },
        { id: 117, name: "SciSpace", description: "AI research paper assistant", category: "productivity", url: "https://typeset.io", icon: "🔬", pricing: "freemium", features: ["Research papers", "Literature review", "Data extraction"], rating: 4.4, trending: false },
        { id: 118, name: "Jenni AI", description: "Research writing assistant", category: "productivity", url: "https://jenni.ai", icon: "✍️", pricing: "freemium", features: ["Research writing", "Citation help", "Content generation"], rating: 4.3, trending: false },
        { id: 119, name: "Fireflies.ai", description: "Meeting transcription and notes", category: "productivity", url: "https://fireflies.ai", icon: "🔥", pricing: "freemium", features: ["Meeting transcription", "Note taking", "Team collaboration"], rating: 4.5, trending: false },
        { id: 120, name: "SlidesAI", description: "AI presentation slide generator", category: "productivity", url: "https://slidesai.io", icon: "🎞️", pricing: "freemium", features: ["Slide generation", "Google Slides", "Time saving"], rating: 4.2, trending: false },
        { id: 121, name: "Taskade", description: "AI productivity workspace", category: "productivity", url: "https://taskade.com", icon: "✅", pricing: "freemium", features: ["Task management", "Team collaboration", "AI assistance"], rating: 4.3, trending: false },
        { id: 122, name: "TLDR This", description: "Article summarization tool", category: "productivity", url: "https://tldrthis.com", icon: "📰", pricing: "freemium", features: ["Article summarization", "Content shortening", "Quick reading"], rating: 4.1, trending: false },
        { id: 123, name: "Humata AI", description: "PDF analysis and Q&A", category: "productivity", url: "https://humata.ai", icon: "📑", pricing: "freemium", features: ["PDF analysis", "Q&A system", "Document understanding"], rating: 4.2, trending: false },
        { id: 124, name: "Elicit", description: "AI research assistant", category: "productivity", url: "https://elicit.org", icon: "🎓", pricing: "freemium", features: ["Research papers", "Literature review", "Data extraction"], rating: 4.4, trending: false },
        { id: 125, name: "ChatDoc", description: "Document analysis and Q&A", category: "productivity", url: "https://chatdoc.com", icon: "📃", pricing: "freemium", features: ["Document analysis", "Q&A system", "Research helper"], rating: 4.3, trending: false },

        // 💡 AI Design & 3D Tools (10)
        { id: 126, name: "Looka", description: "AI logo maker and brand kit", category: "design", url: "https://looka.com", icon: "👁️", pricing: "freemium", features: ["Logo design", "Brand kits", "Business cards"], rating: 4.5, trending: false },
        { id: 127, name: "Designs.ai", description: "AI design platform", category: "design", url: "https://designs.ai", icon: "🎨", pricing: "freemium", features: ["Logo maker", "Video maker", "Design tools"], rating: 4.3, trending: false },
        { id: 128, name: "LogoAI", description: "AI logo generator", category: "design", url: "https://logoai.com", icon: "🔤", pricing: "freemium", features: ["Logo generation", "Brand guides", "Social media kits"], rating: 4.2, trending: false },
        { id: 129, name: "BrandCrowd", description: "AI branding platform", category: "design", url: "https://brandcrowd.com", icon: "👥", pricing: "freemium", features: ["Logo design", "Brand assets", "Customizable"], rating: 4.1, trending: false },
        { id: 130, name: "Hatchful", description: "Shopify's free logo maker", category: "design", url: "https://hatchful.shopify.com", icon: "🐣", pricing: "free", features: ["Free logos", "Business focused", "Quick generation"], rating: 4.0, trending: false },
        { id: 131, name: "Namecheap Logo Maker", description: "Free AI logo generator", category: "design", url: "https://logo-maker.namecheap.com", icon: "🏷️", pricing: "free", features: ["Free logos", "Domain provider", "Business tools"], rating: 4.2, trending: false },
        { id: 132, name: "Illustroke", description: "AI vector illustration generator", category: "design", url: "https://illustroke.com", icon: "✏️", pricing: "freemium", features: ["Vector art", "SVG generation", "Illustration styles"], rating: 4.3, trending: false },
        { id: 133, name: "Khroma", description: "AI color palette generator", category: "design", url: "https://khroma.co", icon: "🎨", pricing: "free", features: ["Color palettes", "AI trained", "Designer focused"], rating: 4.4, trending: false },
        { id: 134, name: "Colorspace", description: "AI color palette generator", category: "design", url: "https://mycolor.space", icon: "🌈", pricing: "free", features: ["Color palettes", "Gradient generator", "Design tools"], rating: 4.1, trending: false },
        { id: 135, name: "Fontjoy", description: "AI font pairing generator", category: "design", url: "https://fontjoy.com", icon: "🔤", pricing: "free", features: ["Font pairing", "Design helper", "Typography tools"], rating: 4.2, trending: false }
    ]
};

// DOM Elements
let currentCategory = 'all';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log("AI Tools Directory Loaded!");
    initializeTheme();
    initializeCategories();
    initializeTools();
    initializeEventListeners();
    initializeTrendingTools();
});

// Theme functionality
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Check for saved theme or prefer-color-scheme
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        html.classList.add('dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        html.classList.remove('dark');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
}

// Initialize categories
function initializeCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (!categoriesGrid) {
        console.error("Categories grid not found!");
        return;
    }
    
    categoriesGrid.innerHTML = '';
    
    // Add "All" category
    const allCategory = document.createElement('div');
    allCategory.className = 'category-card bg-white dark:bg-gray-700 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-600 text-center cursor-pointer active';
    allCategory.innerHTML = `
        <div class="text-3xl mb-3">🔮</div>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-2">All Tools</h3>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">${toolsData.tools.length}+ tools</p>
    `;
    allCategory.addEventListener('click', () => filterToolsByCategory('all'));
    categoriesGrid.appendChild(allCategory);
    
    // Add other categories
    toolsData.categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'category-card bg-white dark:bg-gray-700 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-600 text-center cursor-pointer';
        categoryElement.innerHTML = `
            <div class="text-3xl mb-3">${category.icon}</div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">${category.name}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">${category.description}</p>
            <span class="inline-block bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
                ${category.count}+ tools
            </span>
        `;
        categoryElement.addEventListener('click', () => filterToolsByCategory(category.id));
        categoriesGrid.appendChild(categoryElement);
    });
}

// Initialize tools grid
function initializeTools() {
    displayTools(toolsData.tools);
}

// Display tools in the grid
function displayTools(tools) {
    const toolsGrid = document.getElementById('toolsGrid');
    if (!toolsGrid) {
        console.error("Tools grid not found!");
        return;
    }
    
    toolsGrid.innerHTML = '';

    if (tools.length === 0) {
        toolsGrid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <div class="text-6xl mb-4">🔍</div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">No tools found</h3>
                <p class="text-gray-600 dark:text-gray-300">Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }

    tools.forEach(tool => {
        const toolElement = document.createElement('div');
        toolElement.className = 'tool-card bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm';
        toolElement.innerHTML = `
            <div class="flex items-start justify-between mb-4">
                <div class="text-3xl">${tool.icon}</div>
                ${tool.trending ? '<span class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs px-2 py-1 rounded-full">🔥 Trending</span>' : ''}
            </div>
            <h3 class="font-semibold text-lg text-gray-900 dark:text-white mb-2">${tool.name}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">${tool.description}</p>
            <div class="flex flex-wrap gap-1 mb-4">
                ${tool.features.map(feature => 
                    `<span class="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">${feature}</span>`
                ).join('')}
            </div>
            <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500 dark:text-gray-400">
                    ${'★'.repeat(Math.floor(tool.rating))}${tool.rating % 1 !== 0 ? '½' : ''} ${tool.rating}
                </span>
                <a href="${tool.url}" target="_blank" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Visit Tool <i class="fas fa-external-link-alt ml-1"></i>
                </a>
            </div>
        `;
        toolsGrid.appendChild(toolElement);
    });
}

// Filter tools by category
function filterToolsByCategory(categoryId) {
    currentCategory = categoryId;
    
    // Update active category
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    
    const allCards = document.querySelectorAll('.category-card');
    if (allCards.length > 0) {
        allCards[categoryId === 'all' ? 0 : toolsData.categories.findIndex(cat => cat.id === categoryId) + 1].classList.add('active');
    }
    
    // Update category title
    const categoryTitle = document.getElementById('categoryTitle');
    if (categoryTitle) {
        if (categoryId === 'all') {
            categoryTitle.textContent = 'All Tools';
        } else {
            const category = toolsData.categories.find(cat => cat.id === categoryId);
            categoryTitle.textContent = category.name;
        }
    }
    
    // Filter and display tools
    const filteredTools = categoryId === 'all' 
        ? toolsData.tools 
        : toolsData.tools.filter(tool => tool.category === categoryId);
    
    displayTools(filteredTools);
}

// Initialize trending tools
function initializeTrendingTools() {
    const trendingGrid = document.getElementById('trendingGrid');
    if (!trendingGrid) return;
    
    const trendingTools = toolsData.tools.filter(tool => tool.trending).slice(0, 4);
    
    trendingTools.forEach(tool => {
        const toolElement = document.createElement('div');
        toolElement.className = 'tool-card bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm';
        toolElement.innerHTML = `
            <div class="flex items-start justify-between mb-4">
                <div class="text-3xl">${tool.icon}</div>
                <span class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs px-2 py-1 rounded-full">🔥 Trending</span>
            </div>
            <h3 class="font-semibold text-lg text-gray-900 dark:text-white mb-2">${tool.name}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">${tool.description}</p>
            <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500 dark:text-gray-400">
                    Rating: ${tool.rating}/5
                </span>
                <a href="${tool.url}" target="_blank" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Try Now <i class="fas fa-rocket ml-1"></i>
                </a>
            </div>
        `;
        trendingGrid.appendChild(toolElement);
    });
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    
    const performSearch = (searchTerm) => {
        if (searchTerm.length === 0) {
            filterToolsByCategory(currentCategory);
            return;
        }
        
        const filteredTools = toolsData.tools.filter(tool => 
            tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tool.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        
        displayTools(filteredTools);
    };
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });
    }
    
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Initialize event listeners
function initializeEventListeners() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Search functionality
    initializeSearch();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    // Form submission
    const submitForm = document.getElementById('submitForm');
    if (submitForm) {
        submitForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for submitting your tool! We will review it and add it to our directory soon.');
            submitForm.reset();
        });
    }

    // Add back to top button
    const backToTop = document.createElement('div');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(backToTop);

    // Show/hide back to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
}

// Emergency fallback - if DOM not loaded properly
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEverything);
} else {
    initializeEverything();
}

function initializeEverything() {
    console.log("Initializing AI Tools Directory...");
    initializeTheme();
    initializeCategories();
    initializeTools();
    initializeEventListeners();
    initializeTrendingTools();
}

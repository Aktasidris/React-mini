// generate-readmes.js
import fs from "fs";
import path from "path";

const basePath = ".";

const projects = {
    "e-com": {
        title: "🛒 e-com",
        description: "Basit bir e-ticaret arayüzü. API ile ürün listelenir, sepet işlemleri localStorage ile yönetilir.",
        techs: [
            "React",
            "Redux Toolkit",
            "React Router DOM",
            "Material UI",
            "Tailwind CSS",
            "Axios",
        ],
        api: "https://fakestoreapi.com/products",
    },
    "axios-apı": {
        title: "💱 Currency Converter",
        description: "İki para birimi arasında anlık dönüşüm yapan döviz çevirici.",
        techs: ["React", "Tailwind CSS", "Axios"],
        api: "https://api.freecurrencyapi.com/v1/latest",
    },
    "mini-1-product-page": {
        title: "🛍️ Product Page",
        description: "React + Tailwind ile yapılan basit bir ürün tanıtım sayfası.",
        techs: ["React", "Tailwind CSS"],
        api: "Yok",
    },
    "redux-toolkit": {
        title: "🧰 Redux Toolkit Demo",
        description: "Redux Toolkit ile global state yönetimi denemesi.",
        techs: ["React", "Redux Toolkit"],
        api: "Yok",
    },
    "todo-app": {
        title: "📝 Vanilla Todo App",
        description: "React + Tailwind ile yapılmış basit bir todo uygulaması.",
        techs: ["React", "Tailwind CSS"],
        api: "Yok",
    },
    "react-todo-app": {
        title: "📝 React Todo App (Gelişmiş)",
        description: "Karmaşık yapılarda görev yönetimi için yapılmış gelişmiş Todo App.",
        techs: ["React", "Tailwind CSS", "LocalStorage"],
        api: "Yok",
    },
};

for (const folder of Object.keys(projects)) {
    const fullPath = path.join(basePath, folder);
    const readmePath = path.join(fullPath, "README.md");

    const info = projects[folder];

    const content = `# ${info.title}

## 📄 Açıklama
${info.description}

## 🚀 Kullanılan Teknolojiler
${info.techs.map((t) => `- ${t}`).join("\n")}

## 🔌 Kullanılan API
\`${info.api}\`

## 📦 Projeyi Çalıştırma

Terminal üzerinden aşağıdaki komutları çalıştırarak uygulamayı başlatabilirsiniz:

\`\`\`bash
cd ${folder}
npm install
npm run dev
\`\`\`

Tarayıcıda şu adresi açarak uygulamayı görebilirsiniz:  
👉 [http://localhost:5173](http://localhost:5173)
`;

  try {
    fs.writeFileSync(readmePath, content, 'utf-8');
    console.log(`✅ ${folder}/README.md güncellendi veya oluşturuldu.`);
  } catch (err) {
    console.error(`❌ ${folder}/README.md yazılamadı. Hata: ${err.message}`);
  }
}
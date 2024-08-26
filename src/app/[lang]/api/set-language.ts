import { NextApiRequest, NextApiResponse } from "next";

import {
  setCachedUserLanguage,
  setCachedUserLanguageByCustom,
} from "@/lib/cookies"; // 引入之前封装的缓存操作函数

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { language } = req.body;

    if (!language) {
      return res.status(400).json({ error: "Language not provided" });
    }

    // 使用 setCachedUserLanguage 存储语言到 cookies
    setCachedUserLanguageByCustom(res, language);

    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: "Method not allowed" });
}

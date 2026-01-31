export type CertificationItem = {
  title: string;
  issuer: string;
  icon: "databricks" | "udemy" | "alteryx" | "leetcode";
  iconColor: string;
  credentialUrl?: string;
  year?: string;
};

export const certifications: CertificationItem[] = [
  {
    title: "Get Started with SQL Analytics and BI on Databricks",
    issuer: "Databricks",
    icon: "databricks",
    iconColor: "text-[#FF3621]",
    credentialUrl: "https://drive.google.com/file/d/1K7-ddGDTpRxg1pwMGGx-93xmyP2CHj7a/view?usp=sharing",
  },
  {
    title: "Transform Data with Spark",
    issuer: "Databricks",
    icon: "databricks",
    iconColor: "text-[#FF3621]",
    credentialUrl: "https://drive.google.com/file/d/1xB6qU2Xv3PnVUgeqXkBwkPLWhAB_EKuz/view?usp=sharing",
  },
  {
    title: "Top SQL 50 Badge",
    issuer: "LeetCode",
    icon: "leetcode",
    iconColor: "text-[#FFA116]",
    credentialUrl: "https://leetcode.com/u/nisheet2000/",
  },
  {
    title: "Introduction to Alteryx",
    issuer: "Alteryx",
    icon: "alteryx",
    iconColor: "text-[#0078C0]",
    credentialUrl: "https://drive.google.com/file/d/1wgAyw-v0Md9FbOGoRK3dH7gT87tUV0xS/view?usp=sharing",
  },
  {
    title: "Complete Python Bootcamp",
    issuer: "Udemy",
    icon: "udemy",
    iconColor: "text-[#A435F0]",
    credentialUrl: "",
  },
];

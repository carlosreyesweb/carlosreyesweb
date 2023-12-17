import { Typography } from "@/components/ui/typography";

export default function Home() {
  return (
    <main>
      <Typography.H1>Sample</Typography.H1>
      <Typography.H2>Sample</Typography.H2>
      <Typography.H3>Sample</Typography.H3>
      <Typography.H4>Sample</Typography.H4>
      <Typography.Paragraph>Sample</Typography.Paragraph>
      <Typography.Blockquote>Sample</Typography.Blockquote>
      <Typography.Ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </Typography.Ul>
      <Typography.Ol>
        <li>Item 1</li>
        <li>Item 2</li>
      </Typography.Ol>
      <Typography.Code>Sample</Typography.Code>
    </main>
  );
}

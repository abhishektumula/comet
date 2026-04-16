import Script from "next/script";

type WidgetScriptProps = {
  agentId?: string;
};

export const WidgetScript = ({
  agentId = "cd_8701kbyj8c8zf4c8rz94j4ctfer9",
}: WidgetScriptProps) => {
  return (
    <Script
      src="https://www.calldock.co/widget.js"
      strategy="afterInteractive"
      data-agentid={agentId}
      data-logo-width="24"
      data-logo-height="24"
    />
  );
};

import type { SVGProps } from "react"

const ElasticStack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    <path
      d="M0 0h80v80H0z"
      style={{
        fill: "none",
      }}
    />
    <path
      d="M11 16.5c0-3.6 2.9-6.5 6.5-6.5h45.1c3.6 0 6.5 2.9 6.5 6.5V29H11V16.5z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#eb0d72",
      }}
    />
    <path
      d="M11 51h27.8v19H17.3c-3.5 0-6.3-2.9-6.3-6.5V51z"
      style={{
        fill: "#00a9e5",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
    />
    <path
      d="M41.2 51H69v12.5c0 3.6-2.8 6.5-6.3 6.5H41.2V51z"
      style={{
        fill: "#fed10a",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
    />
    <path
      d="M11 31h58v18H11z"
      style={{
        fill: "#3ebeb0",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
    />
  </svg>
)
export default ElasticStack

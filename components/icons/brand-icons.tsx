// A component to hold various brand icons as SVGs
// This improves performance and avoids dependency issues for specific brand logos.

export const PythonIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>Python</title>
        <path d="M12 24a7.13 7.13 0 0 1-7.13-7.13A7.13 7.13 0 0 1 12 9.75h4.88v-4.88A4.88 4.88 0 0 0 12 .01 12 12 0 0 0 0 12a12 12 0 0 0 12 12zm0-16.88a4.88 4.88 0 0 0-4.88 4.88v4.88H12a7.13 7.13 0 0 1 7.13 7.13A7.13 7.13 0 0 1 12 24.12V19a4.88 4.88 0 0 0 4.88-4.88V9.25H12z" fill="#3776AB"/>
    </svg>
);
  
export const SqlIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>SQL</title>
        <path d="M16.51 8.35v7.3H7.49V8.35h9.02zM3 17.51h18v-11H3v11zM11.66 4.79H3v1.68h12.44L18.47 4H13.3zm5.49 1.68H21V4.79h-3.85z" fill="currentColor"/>
    </svg>
);

export const TensorflowIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>TensorFlow</title>
        <path d="M12.001 0a12 12 0 0 0-5.74 22.316c.306.03.542-.233.465-.538l-1.127-4.477a.406.406 0 0 1 .09-.364L13.2 9.21a.405.405 0 0 0 0-.583L5.688 1.402a.405.405 0 0 1-.091-.364l1.127-4.476C6.8.234 6.564-.029 6.258 0 2.716 1.49 0 5.433 0 9.925c0 4.493 2.716 8.435 6.258 9.925.306.03.542-.233.465-.538L5.596 14.84a.405.405 0 0 1 .09-.364L13.2 6.75a.405.405 0 0 0 0-.583L5.688-1.402a.405.405 0 0 1-.09-.364l1.127-4.476c.077-.305-.159-.568-.465-.538A12.002 12.002 0 0 0 12.001 0z" transform="translate(0 2.075)" fill="#FF6F00"/>
    </svg>
);
  
export const ScikitLearnIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>scikit-learn</title>
        <path d="m13.237.525-9.601 5.54a.498.498 0 0 0-.249.432v11.006c0 .194.113.37.29.45l9.562 5.519a.502.502 0 0 0 .497 0l9.56-5.519a.501.501 0 0 0 .29-.45V6.497a.498.498 0 0 0-.249-.432L13.734.525a.502.502 0 0 0-.497 0" fill="#F7931E"/>
        <path d="m12.42 12.247-4.164-2.404-.002 4.809zm1.156 0v4.809l-4.162-2.405zm-.578-1.02 4.164-2.405v4.809zm-1.156 0 4.164 2.404v-4.808z" fill="#fff"/>
        <path d="m11.838 21.688-7.98-4.606V7.917l7.98 4.607zm.6-14.35L4.458 2.73v9.213l7.98 4.608zm.577 14.35V12.524l7.98-4.607v9.165zm-.6-14.35 7.982 4.608V2.73z" fill="#3499CD"/>
    </svg>
);

export const DockerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>Docker</title>
        <path d="M22.138.848H1.862C1.306.848.85 1.306.85 1.862v20.276c0 .558.456 1.014 1.012 1.014h20.276c.558 0 1.014-.456 1.014-1.014V1.862c0-.557-.456-1.014-1.014-1.014zM8.74 8.718h2.232v2.336H8.74zm3.32 0h2.232v2.336h-2.232zm-3.32-3.41h2.232v2.336H8.74zm3.32 0h2.232v2.336h-2.232zm-6.551 3.41h2.232v2.336H5.509zm13.102 3.23v-2.155c0-1.12-.907-2.03-2.023-2.03h-.103V5.378h-2.232v2.257H8.74V5.378H6.508v2.336H5.51c-1.116 0-2.022.908-2.022 2.03v7.358c.205-.1.43-.16.67-.16 2.06 0 3.72 1.678 3.72 3.75 0 .15-.01.3-.02.44h8.324c-.01-.14-.02-.29-.02-.44 0-2.072 1.66-3.75 3.72-3.75.24 0 .465.06.67.16v-2.155c0-.04 0-.08.01-.12zm-3.218-3.23h2.232v2.336h-2.232zm-3.32 0h2.232v2.336h-2.232z" fill="#2496ED"/>
    </svg>
);

export const KubernetesIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>Kubernetes</title>
        <path d="M12 .643L2.49 5.86v9.503l9.51 5.216 9.51-5.216V5.86zm6.342 13.922L12 18.233l-6.342-3.668V7.094l6.342-3.668 6.342 3.668zm-7.143-6.19l-3.27 1.889.873 1.513 3.27-1.889zm.873 1.513l3.27 1.889.873-1.513-3.27-1.889zm-.436-2.52l-3.27 1.889.873 1.513 3.27-1.889zm.873 1.513l3.27 1.889.873-1.513-3.27-1.889zM12 7.72l-3.27 1.889.873 1.513L12 9.233l2.397 1.386.873-1.513z" fill="#326CE5"/>
    </svg>
);

export const AwsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>Amazon Web Services</title>
        <path d="M12.91,12.72.6,15.75c-.37.18-.6.55-.6.94v2.7c0,.38.23.73.6.91L12.9,23.4c.37.18.82.18,1.19,0l12.29-6.09c.37-.18.6-.53.6-.91v-2.7c0-.39-.23-.76-.6-.94L13.5,12.72c-.19-.09-.39-.14-.6-.14s-.41.05-.6.14ZM2.41,17.44l9.89,4.89,9.89-4.89L12.3,22.34ZM23.4,8.14,13.51.6c-.37-.18-.82-.18-1.19,0L.6,6.69c-.37.18-.6.54-.6.92v2.7c0,.38.23.73.6.91l3.32,1.64,8.97-4.43c.37-.18.82-.18,1.19,0l8.97,4.43,3.32-1.64c.37-.18.6-.53.6-.91v-2.7c0-.38-.23-.74-.6-.92Zm-1.81.9,0,0-8.97,4.43L2.73,9.04,12.31,4Z" fill="#FF9900"/>
    </svg>
);

<template>
  <div class="spinner">
    <svg viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
    </svg>
  </div>
</template>

<script></script>

<style scoped>
:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.spinner {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner svg {
  -webkit-animation: loading-rotate 2s linear infinite;
  -moz-animation: loading-rotate 2s linear infinite;
  -o-animation: loading-rotate 2s linear infinite;
  animation: loading-rotate 2s linear infinite;
  height: 108px;
  width: 108px;
}

.spinner .path {
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: #409eff;
  stroke-linecap: round;
  -webkit-animation: loading-dash 1.5s ease-in-out infinite;
  -moz-animation: loading-dash 1.5s ease-in-out infinite;
  -o-animation: loading-dash 1.5s ease-in-out infinite;
  animation: loading-dash 1.5s ease-in-out infinite;
}

@-webkit-keyframes loading-rotate {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@-moz-keyframes loading-rotate {
  to {
    -moz-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@-o-keyframes loading-rotate {
  to {
    -o-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes loading-rotate {
  to {
    -webkit-transform: rotate(1turn);
    -moz-transform: rotate(1turn);
    -o-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@-webkit-keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  to {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}

@-moz-keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  to {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}

@-o-keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  to {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}

@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  to {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
</style>

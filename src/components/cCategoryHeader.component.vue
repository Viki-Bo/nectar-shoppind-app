<template>
  <div class='flex relative font-montserrat'>
    <header class='absolute left-0 font-bold text-2xl'>
      <slot></slot>
    </header>

    <a href='#' class='absolute right-0 text-primary-green text-base'>See all</a>
  </div>
</template>

<script>


export default{
  name: "CCategoryHeader",
}
</script>
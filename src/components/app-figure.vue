<script setup lang="ts">

interface Props {
  wrongsLettersLength : number
}

defineProps<Props>();


</script>

<template>
  <svg height="250" width="200" class="figure-container">
    <!-- Rod -->
    <line x1="60" y1="20" x2="140" y2="20"/>
    <line x1="140" y1="20" x2="140" y2="50"/>
    <line x1="60" y1="20" x2="60" y2="230"/>
    <line x1="20" y1="230" x2="100" y2="230"/>

    <!-- Head -->
    <circle v-if="wrongsLettersLength >= 1" cx="140" cy="70" r="20" fill="palevioletred" stroke="palevioletred"/>

    <!-- Body -->
    <line  v-if="wrongsLettersLength >= 2" x1="140" y1="90" x2="140" y2="150" stroke="palevioletred"/>

    <!-- Arms -->
    <line  v-if="wrongsLettersLength >= 3" x1="140" y1="120" x2="120" y2="100" stroke="palevioletred"/>
    <line  v-if="wrongsLettersLength >= 4" x1="140" y1="120" x2="160" y2="100" stroke="palevioletred"/>

    <!-- Legs -->
   <line  v-if="wrongsLettersLength >= 5" x1="140" y1="150" x2="120" y2="180" stroke="palevioletred"/>
   <line  v-if="wrongsLettersLength >= 6" x1="140" y1="150" x2="160" y2="180" stroke="palevioletred"/>
  </svg>
</template>

<style scoped>

</style>
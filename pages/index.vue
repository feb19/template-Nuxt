<template>
  <div>
  <h1>Hello {{ name }}!</h1>
  <div style="display: flex;">
    <Button text='primary' kind='primary'/>
    <Button text='default' kind='default'/>
    <Button text='success' kind='success'/>
    <Button text='info' kind='info'/>
    <Button text='warning' kind='warning'/>
    <Button text='danger' kind='danger'/>
    <Button text='dark' kind='dark'/>
  </div>
</div>
</template>

<script>
import Button from '~/components/atoms/Button.vue'
export default {
  components: {
    Button
  },
  data: () => {
    return { name: 'world' }
  }
}
</script>

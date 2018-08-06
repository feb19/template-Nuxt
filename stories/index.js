import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import Button from '../components/atoms/Button.vue'

storiesOf('Button', module)
  .add('default', withNotes('button regular')( () => ({
    components: { Button },
    template: `<Button text="default" click="action('hoge')" />`
  })))
  .add('color', () => ({
    components: { Button },
    template: `
      <div style="display: flex;">
        <Button text='primary' kind='primary'/>
        <Button text='default' kind='default'/>
        <Button text='success' kind='success'/>
        <Button text='info' kind='info'/>
        <Button text='warning' kind='warning'/>
        <Button text='danger' kind='danger'/>
        <Button text='dark' kind='dark'/>
      </div>
    `
  }))
  .add('size', () => ({
    components: { Button },
    template: `
      <div>
        <div style="display: flex;">
          <Button text='minimum' kind='primary' size="minimum"/>
          <Button text='small' kind='primary' size="small"/>
          <Button text='normal' kind='primary' size="normal"/>
          <Button text='large' kind='primary' size="large"/>
        </div>
        <div style="display:flex;"><Button text='full' kind='primary' size="full"/></div>
      </div>
      `
  }))

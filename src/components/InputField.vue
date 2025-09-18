<template>
  <div class="input-field">
    <label :for="label">{{ label }}</label>
    <input
      :id="label"
      :type="inputType"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :required="required"
    />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
  inputType: {
    type: String,
    required: false,
    default: 'text',
  },
  modelValue: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    required: true,
  },
})

defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
.input-field {
  display: flex;
  flex-direction: column;
  gap: 12px;

  label {
    font-size: 0.9rem;
  }

  input {
    padding: 15px 20px;
    border-radius: 10px;
    border: 1px solid #5c5c5c;
    font-size: 0.9rem;
  }

  input[placeholder] {
    color: #6a6a6a;
  }
}
</style>

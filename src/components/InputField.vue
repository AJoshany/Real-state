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
  gap: 1.2rem;

  label {
    font-size: 1.4rem;
  }

  input {
    padding: 1.5rem 2rem;
    border-radius: 1rem;
    border: 1px solid var(--color-gray-500);
    font-size: 1.4rem;
  }

  input[placeholder] {
    color: var(--color-gray-400);
  }
}
</style>

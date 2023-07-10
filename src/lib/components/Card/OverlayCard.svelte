<script lang="ts">
  export let title: string;
  export let body: string;
</script>

<div class="card w-full bg-base-100 shadow-xl image-full bg-cover">
  <figure>
    <slot name="image" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{body}</p>
    <div class="card-actions justify-end">
      <slot name="actions" />
    </div>
  </div>
</div>

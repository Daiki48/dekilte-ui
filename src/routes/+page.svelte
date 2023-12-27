<script lang="ts">
	import { Button } from '$lib/index.js';
</script>

<h1>Components List</h1>

<h2>Button</h2>

<p>Default Button style.</p>
<pre><code>
  &lt;Button&gt;Hello Button Component!&lt;/Button&gt;
</code></pre>
<Button>Hello Button Component!</Button>

<p><strong>fontColor</strong> custom in Button component.</p>
<pre><code>
  &lt;Button fontColor="#111"&gt;fontColor custom&lt;/Button&gt;
</code></pre>
<Button fontColor="#111">fontColor custom</Button>

<p><strong>onClick</strong> custom in Button component.</p>
<pre><code>
  &lt;Button onClick=&#123;() => alert('Hello onClick component')&#125;&gt;onClick custom&lt;/Button&gt;
</code></pre>
<Button onClick={() => alert('Hello onClick component')}>onClick custom</Button>

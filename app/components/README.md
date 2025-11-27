# Custom Components

This directory contains reusable React components for use in MDX files.

## Available Components

### FAQItem
Accordion-style FAQ component with expand/collapse functionality.

```tsx
<FAQItem 
  question="Your question?"
  answer="Your answer here."
  defaultOpen={false}
/>
```

### FeatureCard
Display features in a grid with icons and descriptions.

```tsx
<FeatureCard
  title="Feature Name"
  description="Feature description"
  icon="✨"
  color="#0c3b43"
/>
```

### CodeExample
Code snippet display with copy-to-clipboard functionality.

```tsx
<CodeExample
  code="your code here"
  language="python"
  title="Optional title"
/>
```

### AlertBox
Display different types of alerts (info, success, warning, error).

```tsx
<AlertBox type="info" title="Title">
  Your message here
</AlertBox>
```

### StepCard
Step-by-step instructions with visual numbering.

```tsx
<StepCard
  step={1}
  title="Step Title"
  description="Step description"
  isLast={false}
/>
```

### CardGrid
Grid of clickable cards with descriptions.

```tsx
<CardGrid
  cols={3}
  cards={[
    {
      title: 'Card Title',
      href: '/path',
      description: 'Card description'
    }
  ]}
/>
```

## Usage

Import components in your MDX files:

```mdx
import { FAQItem } from '../components/FAQItem'
import { FeatureCard } from '../components/FeatureCard'
```

Then use them directly in your content:

```mdx
<FAQItem 
  question="How do I get started?"
  answer="Follow these steps..."
/>
```

## Styling

All components use inline styles for consistency and are designed to work with the light theme. Colors can be customized via props where available.


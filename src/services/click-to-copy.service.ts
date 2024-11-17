export function clickToCopyWithTooltip(
    node: HTMLElement,
    text: string
): { destroy: () => void } {

    const tooltipDuration = 2000; // Tooltip visibility duration in milliseconds
    let tooltip: HTMLDivElement | null = null;

    async function copyText() {

        try {
            await navigator.clipboard.writeText(text);

            showTooltip('Copied to Clipboard');

            node.dispatchEvent(
                new CustomEvent('copysuccess', {
                    bubbles: true,
                })
            );
        } catch (error) {
            showTooltip('Failed to copy', true);

            node.dispatchEvent(
                new CustomEvent('copyerror', {
                    bubbles: true,
                    detail: error,
                })
            );
        }
    }

    function showTooltip(message: string, isError = false) {
        // Remove existing tooltip if present
        if (tooltip) {
            tooltip.remove();
        }

        // Create tooltip element
        tooltip = document.createElement('div');
        tooltip.innerText = message;
        tooltip.style.position = 'absolute';
        tooltip.style.padding = '8px';
        tooltip.style.color = 'grey';
        tooltip.style.backgroundColor = 'white';
        tooltip.style.borderRadius = '4px';
        tooltip.style.fontSize = '0.875rem';
        tooltip.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
        tooltip.style.zIndex = '1000';

        // Position tooltip relative to the button
        const rect = node.getBoundingClientRect();
        tooltip.style.top = `${rect.top - 40 + window.scrollY}px`; // Above the button
        tooltip.style.left = `${rect.left + rect.width / 2 - 50 + window.scrollX}px`; // Centered horizontally

        document.body.appendChild(tooltip);

        // Remove tooltip after specified duration
        setTimeout(() => {
            tooltip?.remove();
            tooltip = null;
        }, tooltipDuration);
    }

    node.addEventListener('click', copyText);

    return {
        destroy() {
            node.removeEventListener('click', copyText);
            tooltip?.remove();
        },
    };
}

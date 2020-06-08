<template>
    <div>
        <header
            class="flex justify-between px-8 py-4 hover:shadow transition-all duration-500 ease-out uppercase"
        >
            <strong>
                <g-link class="text-primary" to="/">{{ $static.metadata.siteName }}</g-link>
            </strong>
            <nav class="grid grid-flow-col w-1/4 text-right">
                <g-link
                    class="text-gray-600 font-medium hover:text-primary transition-colors duration-300 ease-in-out"
                    to="/"
                >Home</g-link>
                <g-link
                    class="text-gray-600 font-medium hover:text-primary transition-colors duration-300 ease-in-out"
                    to="/about/"
                >About</g-link>
            </nav>
        </header>
        <main>
            <slot />
        </main>
    </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

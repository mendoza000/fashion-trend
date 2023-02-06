<script setup lang="ts">
import FaqCard from "./FaqCard.vue";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-10 px-10 py-20 lg:px-20"
    id="faq"
  >
    <h2 class="text-4xl font-bold">Preguntas frecuentes</h2>

    <div class="grid items-center justify-center gap-10 lg:grid-cols-3">
      <FaqCard
        :title="'¿Cuáles son los tamaños disponibles en FashionTrend?'"
        :content="'Ofrecemos una amplia variedad de tamaños para hombres y mujeres, desde la talla XS hasta la XXL. Nuestro objetivo es asegurarnos de que todos puedan encontrar la prenda perfecta que se ajuste a su estilo personal y cuerpo.'"
      />
      <FaqCard
        :title="'¿Qué materiales utiliza FashionTrend en sus prendas?'"
        :content="'Utilizamos materiales de alta calidad, como algodón, poliéster y mezclas de tejidos, para asegurar la comodidad y durabilidad de nuestras prendas. Además, seleccionamos cuidadosamente cada material para garantizar la mejor calidad posible.'"
      />
      <FaqCard
        :title="'¿Cuáles son los costos de envío y cuánto tiempo tardan en llegar?'"
        :content="'Ofrecemos envío nacional gratuito en todas las compras. El tiempo de entrega para envíos nacionales suele ser de 3 a 7 días laborables, pero puede variar según la ubicación y la cantidad de pedidos que estemos procesando.'"
      />

      <FaqCard
        :title="'¿Cuál es el proceso de devolución en FashionTrend?'"
        :content="'Ofrecemos un proceso de devolución sencillo y sin complicaciones. Si no estás satisfecho con tu compra, puedes devolverla dentro de los 30 días siguientes a la recepción para obtener un reembolso o un intercambio.  '"
      />
      <FaqCard
        :title="'¿Cómo puedo pagar en FashionTrend?'"
        :content="'Ofrecemos una amplia variedad de opciones de pago, incluyendo tarjetas de crédito, PayPal y transferencias bancarias. Todas las transacciones son seguras y protegidas por encriptación SSL.'"
      />
      <FaqCard
        :title="'¿Cuáles son las políticas de privacidad de FashionTrend?'"
        :content="'Tomamos la privacidad de nuestros clientes muy en serio. No compartiremos ni venderemos su información a terceros. Toda la información que recopilamos se utiliza únicamente para mejorar su experiencia de compra con nosotros.'"
      />
    </div>
  </div>
</template>

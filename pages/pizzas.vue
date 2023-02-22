<template>
  <div id="Pizzas">
    <section class="Categories">
      <container>
        <h2 class="Title">Catégories</h2>
        <row>
          <column sm="6" md="3">
            <nuxt-link class="Link" to="/pizzas" exact>
              <div class="Link__Box">
                <calendar/>La pizza du moment
              </div>
            </nuxt-link>
          </column>
          <column sm="6" md="3">
            <nuxt-link class="Link" to="/pizzas/habituelles">
              <div class="Link__Box">
                <olive/>Les habituelles
              </div>
            </nuxt-link>
          </column>
          <column sm="6" md="3">
            <nuxt-link class="Link" to="/pizzas/charcutieres">
              <div class="Link__Box">
                <bacon/>Les charcutières
              </div>
            </nuxt-link>
          </column>
          <column sm="6" md="3">
            <nuxt-link class="Link" to="/pizzas/legumes">
              <div class="Link__Box">
                <brocoli/> Les légumes
              </div>
            </nuxt-link>
          </column>
          <column sm="6" md="3">
            <nuxt-link class="Link" to="/pizzas/poulets">
              <div class="Link__Box">
                <chicken/> Les poulets
              </div>
            </nuxt-link>
          </column>
          <column sm="6" md="3">
            <nuxt-link class="Link" to="/pizzas/poissons">
              <div class="Link__Box">
                <fish/> Les poissons
              </div>
            </nuxt-link>
          </column>
          <column sm="6" md="3">
            <nuxt-link class="Link" to="/pizzas/fromages">
              <div class="Link__Box">
                <cheese/> Les fromages
              </div>
            </nuxt-link>
          </column>
          <column sm="6" md="3">
            <nuxt-link class="Link" to="/pizzas/sucrees-salees">
              <div class="Link__Box">
                <salt-suggar/> Les sucrées/salées
              </div>
            </nuxt-link>
          </column>
          <column sm="6" md="3">
            <nuxt-link class="Link" to="/pizzas/specialites-regionales">
              <div class="Link__Box">
                <meat/> Spécialités régionales
              </div>
            </nuxt-link>
          </column>
          <column sm="6" md="3">
            <nuxt-link class="Link" to="/pizzas/specialites-italiennes">
              <div class="Link__Box">
                <fruit/> Spécialités italiennes
              </div>
            </nuxt-link>
          </column>
        </row>
        <row>
          <column sm="3" md="4">
          </column>
          <column sm="3" md="4">
            <h3 class="Title2"> Offre spéciale </h3>
            <p class="offre"> 5 pizzas au choix à 52€ (Ø 29cm) <br> 10€ la pizza supplémentaire </p> 
          </column>
        </row>
      </container>
    </section>
    <nuxt-child/>
  </div>
</template>

<script>
import Calendar from '@/components/Icons/Calendar'
import Bacon from '@/components/Icons/Bacon'
import Brocoli from '@/components/Icons/Brocoli'
import Cheese from '@/components/Icons/Cheese'
import Chicken from '@/components/Icons/Chicken'
import Fish from '@/components/Icons/Fish'
import Fruit from '@/components/Icons/Fruit'
import Meat from '@/components/Icons/Meat'
import Olive from '@/components/Icons/Olive'
import SaltSuggar from '@/components/Icons/SaltSuggar'

export default {
  components: {
    Calendar,
    Bacon,
    Brocoli,
    Cheese,
    Chicken,
    Fish,
    Fruit,
    Meat,
    Olive,
    SaltSuggar
  }
}
</script>

<style lang="scss">
.Categories
{
  .Title
  {
    padding-bottom: 30px;
  }
  .Title2
  {
    padding-bottom: 16px;
    padding-top: 30px;
    text-align : center;
    font-size : 28px;
  }
  .offre
  {
    text-align : center;
    font-size : 19px;
  }
  .Icons.Icons--calendar
  {
    height: 24px;
    margin-top: 10px;
  }
  .nuxt-link-active, .nuxt-link-active:hover
  {
    background-color: lighten(#252e38, 70%);
  }
}
</style>

<template>
  <div class="footer">
    <v-container>
      <v-row>

        <v-col cols="12" sm="4" class="footer-col">
          <h3>Our Company</h3>
          <ul>
            <router-link v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem.path">
              <li>{{ menuItem.title }}</li>
            </router-link>
          </ul>
        </v-col>


        <v-col cols="12" sm="4" class="footer-col">
          <h3>Web Info</h3>
          <ul>
            <li><i class="icon"></i><a href="tel:(+374)123456 ">(+374)123456</a>
            </li>
            <li><i class="fa-solid fa-envelope icon"></i><a href="mailto:todolist@gmail.com ">
                todolist@gmail.com</a>
            </li>
            <li> <i class="fa-solid fa-location-crosshair"></i> <a href=""> Armenia, Yerevan
              </a>
            </li>
          </ul>
        </v-col>


        <v-col cols="12" sm="4" class="footer-col">
          <h3>Links</h3>
          <ul>
            <li><a href="https://www.facebook.com/" target="_blank"> <i class="fa-brands fa-facebook web-icon"></i></a>
            </li>

            <li><a href="https://github.com/nazeliaslanyan" target="_blank"><i class="fa-brands fa-github"></i></a>
            </li>

            <li><a href="https://www.linkedin.com/in/nazeli-aslanyan-b74aba24a/" target="_blank"><i
                  class="fa-brands fa-linkedin web-icon"></i></a>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script src="./footer.js"></script>

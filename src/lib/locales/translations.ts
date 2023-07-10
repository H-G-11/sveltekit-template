export type LocaleLanguage = "en" | "fr"

export const localeLanguages: LocaleLanguage[] = ["en", "fr"]

export type LocaleKey =
  | "homepage.subtitle"
  | "homepage.welcome"
  | "homepage.stats.users"
  | "homepage.stats.website"
  | "homepage.stats.downloads"
  | "homepage.stats.sales"
  | "homepage.users.active"
  | "homepage.conversersions.title"
  | "homepage.conversersions.change"
  | "homepage.conversersions.card"
  | "homepage.applications.card"
  | "homepage.form.month"
  | "homepage.form.ytd"
  | "month.0"
  | "month.1"
  | "month.2"
  | "month.3"
  | "month.4"
  | "month.5"
  | "month.6"
  | "month.7"
  | "month.8"
  | "month.9"
  | "month.10"
  | "month.11"
  | "navbar.dashboard"
  | "navbar.user"
  | "navbar.chat"
  | "navbar.settings"
  | "navbar.page404"
  | "navbar.install"
  | "navbar.techstack"
  | "navbar.adapt"
  | "navbar.app"
  | "navbar.howToUse"
  | "error.logIn.title"
  | "error.logIn.message"
  | "navbar.card.title"
  | "navbar.card.text"
  | "navbar.card.button"

export type LocaleVar = "name" | "time"

export type LocaleVarObject = { [v in LocaleVar]?: any }

// This will ensure that all languages and keys are present, and nothing else.
export const translations: Record<LocaleLanguage, Record<LocaleKey, string>> = {
  en: {
    "homepage.welcome": "Welcome Back,",
    "homepage.subtitle": "Here is your dashboard for the selected period",
    "homepage.stats.users": "Total Active Users",
    "homepage.stats.website": "Total Website Visits",
    "homepage.stats.downloads": "Total Downloads",
    "homepage.stats.sales": "Total Sales",
    "homepage.users.active": "Most Active Users",
    "homepage.conversersions.title": "Conversions",
    "homepage.conversersions.change": "+32% since last year",
    "homepage.conversersions.card": "Conversions since January",
    "homepage.applications.card": "Applications since January",
    "homepage.form.month": "Choose Month",
    "homepage.form.ytd": "Year To Date",
    "month.0": "January",
    "month.1": "February",
    "month.2": "March",
    "month.3": "April",
    "month.4": "May",
    "month.5": "June",
    "month.6": "July",
    "month.7": "August",
    "month.8": "September",
    "month.9": "October",
    "month.10": "November",
    "month.11": "December",
    "navbar.dashboard": "Dashboard",
    "navbar.user": "User",
    "navbar.chat": "Chat",
    "navbar.settings": "Settings",
    "navbar.page404": "404 Page",
    "navbar.install": "Install",
    "navbar.techstack": "Techstack",
    "navbar.adapt": "Adapt",
    "navbar.app": "App",
    "navbar.howToUse": "How To Use",
    "error.logIn.title": "Please Log In",
    "error.logIn.message": "To go any further and access marvelous content",
    "navbar.card.title": "Got a Question?",
    "navbar.card.text": "Contact us below! We'll be happy to help.",
    "navbar.card.button": "Contact us",
  },
  fr: {
    "homepage.welcome": "Bonjour,",
    "homepage.subtitle": "Voici votre tableau pour la période sélectionnée",
    "homepage.stats.users": "Total utilisateurs",
    "homepage.stats.website": "Total Visiteurs",
    "homepage.stats.downloads": "Total téléchargements",
    "homepage.stats.sales": "Total Ventes",
    "homepage.users.active": "Utilisateurs les plus actifs",
    "homepage.conversersions.title": "Conversions",
    "homepage.conversersions.change": "+32% depuis l'année dernière",
    "homepage.conversersions.card": "Conversions depuis Janvier",
    "homepage.applications.card": "Applications depuis Janvier",
    "homepage.form.month": "Choisissez le Mois",
    "homepage.form.ytd": "Depuis Début Année",
    "month.0": "Janvier",
    "month.1": "Février",
    "month.2": "Mars",
    "month.3": "Avril",
    "month.4": "Mai",
    "month.5": "Juin",
    "month.6": "Juillet",
    "month.7": "Août",
    "month.8": "Septembre",
    "month.9": "Octobre",
    "month.10": "Novembre",
    "month.11": "Décembre",
    "navbar.dashboard": "Accueil",
    "navbar.user": "Utilisateur",
    "navbar.chat": "Chat",
    "navbar.settings": "Paramètres",
    "navbar.page404": "Page 404",
    "navbar.install": "Instalation",
    "navbar.techstack": "Techstack",
    "navbar.adapt": "Adaptation",
    "navbar.app": "Application",
    "navbar.howToUse": "Utilisation",
    "error.logIn.title": "Identifiez-vous",
    "error.logIn.message": "Pour accéder à notre contenu mirifique",
    "navbar.card.title": "Une Question?",
    "navbar.card.text": "Contactez-nous! Nous serons heureux de vous aider.",
    "navbar.card.button": "Contactez-nous",
  },
}

<script lang="ts">
  import Table from "$lib/components/Table/Table.svelte";
  import type { ContributorType } from "$lib/types/contributor";
  import relativeTimeStringFromAbsoluteTimeNumber from "$lib/utils/relativeTime";
  import { locale } from "$lib/locales/i18n";
  import avatar_0 from "$lib/assets/avatars/avatar_0.jpg";
  import avatar_1 from "$lib/assets/avatars/avatar_1.jpg";
  import avatar_2 from "$lib/assets/avatars/avatar_2.jpg";
  import avatar_3 from "$lib/assets/avatars/avatar_3.jpg";
  import avatar_4 from "$lib/assets/avatars/avatar_4.jpg";

  import { t } from "$lib/locales/i18n";

  let contributors: ContributorType[] = [
    {
      imageSrc: avatar_0,
      name: "Hart Hagerty",
      country: "United States",
      companyName: "Zemlak, Daniel and Leannon",
      jobTitle: "Desktop Support Technician",
      lastConnected: Date.now() - Math.random() * 10000000,
    },
    {
      imageSrc: avatar_1,
      name: "Brice Swyre",
      country: "China",
      companyName: "Carroll Group",
      jobTitle: "Tax Accountant",
      lastConnected: Date.now() - Math.random() * 10000000,
    },
    {
      imageSrc: avatar_2,
      name: "Marjy Ferencz",
      country: "Russia",
      companyName: "Rowe-Schoen",
      jobTitle: "Office Assistant I",
      lastConnected: Date.now() - Math.random() * 10000000,
    },
    {
      imageSrc: avatar_3,
      name: "Yancy Tear",
      country: "Brazil",
      companyName: "Wyman-Ledner",
      jobTitle: "Community Outreach Specialist",
      lastConnected: Date.now() - Math.random() * 10000000,
    },
    {
      imageSrc: avatar_4,
      name: "Jeren Donytolano",
      country: "France",
      companyName: "Yollynuw",
      jobTitle: "ML Engineer",
      lastConnected: Date.now() - Math.random() * 10000000,
    },
  ];
</script>

<div class="card bg-base-100 shadow-xl">
  <div class="card-body styled-chart os-breakdown">
    <h1 class="card-title">{$t("homepage.users.active")}</h1>
    <Table headers={["Name", "Job", "Last Connected", ""]}>
      {#each contributors as contributor}
        <tr>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img
                    src={contributor.imageSrc}
                    alt={`avatar-${contributor.name}`}
                    loading="lazy"
                  />
                </div>
              </div>
              <div>
                <div class="font-bold">{contributor.name}</div>
                <div class="text-sm opacity-50">{contributor.country}</div>
              </div>
            </div>
          </td>
          <td>
            {contributor.companyName}
            <br />
            <span class="badge badge-ghost badge-sm"
              >{contributor.jobTitle}</span
            >
          </td>
          <td
            >{relativeTimeStringFromAbsoluteTimeNumber(
              $locale,
              contributor.lastConnected
            )}</td
          >
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      {/each}
    </Table>
  </div>
</div>

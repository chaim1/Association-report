using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Model
{
    public class Donation
    {
        public string conditionsDonation { get; set; }
        public double amountOfDonation { get; set; }
        public int currencyType { get; set; }
        public string entityName { get; set; }
        public int entityType { get; set; }
        public double exchangeRate { get; set; }
        public string purposeOfDonation { get; set; }

    }
}